const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const checkAuth = async (req, res, next) => {
    try {
        const token = req.signedCookies.cookie;
        // const token = req.headers.authorization.replace('Bearer ', '');
        if (!token) {
            throw new Error('Token missing');
        }
        const { id } = await jwt.verify(token, 'hash');
        if (!id) {
            throw new Error('Token invalid');
        }
        const user = await User.findById(id);
        req.user = user; 
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
};
 
module.exports = {
    checkAuth
}