const { Router } = require('express');
const DevControoler = require('./controllers/DevController');
const SearchControoler = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevControoler.index);
routes.post('/devs', DevControoler.store);

routes.get('/search', SearchControoler.index);

module.exports = routes;