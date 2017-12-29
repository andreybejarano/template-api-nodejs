'use strict';

const config = require('./env');
const endpoints = {
  weather: `${config.apiBasePatch}api.apixu.com/v1/current.json?key=:key&q=:q&lang=:lang`
};

module.exports = Object.assign({}, endpoints);
