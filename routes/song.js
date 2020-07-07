const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middlewares/middleware');
const mongoose = require('mongoose');
const Song = mongoose.model('songs');

router.get('/', checkAuth, async (req, res) => {
    try {
        const { user } = req;
        await user.populate('songs').execPopulate();
        const songs = user.songs;
        res.json(songs.map(song => song.toJSON()));
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.post('/', checkAuth, async (req, res) => {
    const { user } = req;
    const { name, artist, smallImage, bigImage, mediumImage, preview } = req.body;

    await user.populate('songs').execPopulate();

    try {
        const song = user.songs.find(song => song.name === name);
        if (song) {
            return res.json(song.toJSON());
        };
        const newSong = await new Song({ name, artist, smallImage, bigImage, owner: user.id, mediumImage, preview }).save();
        res.json(newSong.toJSON());
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.delete('/:id', checkAuth, async (req, res) => {
    const { id } = req.params;
    const { user } = req;
    try {
        await user.populate('songs').execPopulate();
        await Song.findOne({ owner: user.id, _id: id }).remove();
        res.json();
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;