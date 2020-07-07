require('dotenv').config();
require('./models/user');
require('./models/song');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const app = express();

//MONGODB SETUP
const url = process.env.MONGO_URL;
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('DB connected'));
mongoose.connection.on('error', () => console.log('DB error'));

const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/song');

//MIDDLEWARES
app.use(express.static('build'));
app.use(cookieParser(process.env.COOKIE_SIGNED_KEY));
app.use(helmet());
app.use(bodyParser.json());

//ROUTES
app.use('/auth', authRoutes); 
app.use('/songs', songRoutes); 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
}); 