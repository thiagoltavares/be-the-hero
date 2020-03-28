import { Router } from "express";

import OngController from "./controller/OngController";
import IncidentController from "./controller/IncidentController";
import ProfileController from "./controller/ProfileController";
import SessionController from "./controller/SessionController";


const routes = Router();

routes.post('/sessions', SessionController.store)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

export default routes;