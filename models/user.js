const mongoose = require('mongoose');
const{ Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String
        }
    }]
});

userSchema.virtual('songs', {
    ref: 'songs',
    localField: '_id',
    foreignField: 'owner'
});

userSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
        delete returnedObject.tokens;
    }
});

userSchema.methods.comparePassword = async function (password) {
    const user = this;

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
        throw new Error('Wrong password');
    };

    return user;
};

userSchema.methods.generateToken = async function (password) {
    const user = this;

    const token = await jwt.sign({ 'id': user._id }, 'hash');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}

mongoose.model('users', userSchema);