'use strict';

const expressApi = require('express')();
const config = require('./config/');
const morgan = require('morgan');
const basePath = '';

// use morgan for logs in development
expressApi.use(morgan('dev'));

// disabled x-powered-by for security
expressApi.disable('x-powered-by');

// include routes and expose in base path
expressApi.use(basePath, require('./api-routes'));

expressApi.listen(config.port, () => {
  console.log(`Server started on port ${config.port} (${config.env})`);
});

module.exports = expressApi;
