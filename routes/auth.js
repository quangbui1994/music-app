const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { checkAuth } = require('../middlewares/middleware');

router.post('/login', async (req, res) => {
    const { body: { email, password } } = req; 

    const setCookieHeader = token => {
        //SET COOKIE
        res.cookie('cookie', token, {
            httpOnly: true,
            signed: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000
        });
    }

    try {
        const user = await User.findOne({ email }); 
        if (user) {
            const returnedUser = await user.comparePassword(password);
            const token = await returnedUser.generateToken();
            setCookieHeader(token);
            return res.json(returnedUser.toJSON());
        };

        const newUser = await new User({ email, password }).save();
        const token = await newUser.generateToken();
        setCookieHeader(token);
        res.json(newUser.toJSON());
    } catch (error) {
        res.status(400).send({ message: error.message });
    };
});

router.post('/logout', checkAuth, (req, res) => {
    const { user, token } = req;
    user.tokens = user.tokens.filter(el => el.token !== token);
    user.save();
    res.json(user.toJSON());
});

module.exports = router;