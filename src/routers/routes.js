const routes = require('express').Router();
const MusicController = require('../controllers/MusicController');

routes.get('/', MusicController.getAll);
routes.get('/add', MusicController.add);
routes.post('/a', MusicController.a);
routes.get("/edit/:id", MusicController.edit);
routes.post('/done/:id', MusicController.done);
routes.get('/delet/:id', MusicController.delet)


module.exports = routes;

