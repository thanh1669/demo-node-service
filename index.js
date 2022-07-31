
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const enviroment = {
    port: process.env.PORT || 3000,
    version: process.env.VERSION,
    mongoUri: process.env.MONGODB_URI
};

if (!enviroment.port) {
    console.log('Missing enviroment PORT!');
    process.exit(1);
};

if (!enviroment.mongoUri) {
    console.log('Missing enviroment MONGODB_URI!');
    process.exit(1);
};

// connection to db
mongoose
    .connect(enviroment.mongoUri)
    .then((db) => console.log('Mongodb connected'))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

// importing routes
const indexRoutes = require('./routes');

// config views
app.set('port', enviroment.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middelwares
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', indexRoutes);

app.listen(enviroment.port, () => {
    console.log(`[NODE] App listening listening at port http://localhost:${enviroment.port}`)
});