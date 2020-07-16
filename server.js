const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
const Recipes = require('./helpers.js')

const server = express();

server.use(helmet());
server.use(express.json());

// endpoints 

module.exports = server 