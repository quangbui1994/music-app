const mongoose = require('mongoose');
const { Schema } = mongoose;

const songSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    smallImage: {
        type: String,
        required: true
    },
    bigImage: {
        type: String,
        required: true
    },
    mediumImage: {
        type: String,
        required: true
    },
    preview: {
        type: String, 
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
});

songSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

mongoose.model('songs', songSchema);