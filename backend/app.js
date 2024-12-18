const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const authRoutes = require('./routes/auth');
const imageRoutes = require('./routes/images');
const logRoutes = require('./routes/logs');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/logs', logRoutes);

module.exports = app;