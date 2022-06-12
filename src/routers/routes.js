const routes = require('express').Router();
const MusicController = require('../controllers/MusicController');

routes.get('/', MusicController.getAll);

module.exports = routes;

