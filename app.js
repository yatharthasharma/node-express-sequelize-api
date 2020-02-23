import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

module.exports = app;
