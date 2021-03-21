import express, { request, response } from 'express';

import ProductsController from './controllers/ProductsController';

const routes = express.Router();
const productsController = new ProductsController();

routes.get('/products', productsController.index);
routes.get('/products/:id', productsController.show);
routes.post('/products', productsController.create);
routes.put('/products/:id', productsController.update);
routes.delete('/products/:id', productsController.delete);

export default routes;