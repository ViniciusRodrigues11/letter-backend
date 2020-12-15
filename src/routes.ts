import { Router } from 'express';

import letterController from './controllers/letterController';

const routes = Router();


routes.get('/letter/:id', letterController.show);

routes.post('/letter', letterController.create);

export default routes;