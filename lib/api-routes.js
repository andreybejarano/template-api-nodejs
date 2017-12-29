const express = require('express');
const router = express.Router();
const WeatherController = require('./weather/WeatherController');

// Routes of features API

router.get('/weather', WeatherController.getWeather);

module.exports = router;
