import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import OngController from "./controller/OngController";
import IncidentController from "./controller/IncidentController";
import ProfileController from "./controller/ProfileController";
import SessionController from "./controller/SessionController";

import IncidentValidation from "./validations/IncidentValidation";
import ProfileValidation from "./validations/ProfileValidation";
import OngValidation from "./validations/OngValidation";

const routes = Router();

/**
 * Sessions Routes
 */
routes.post("/sessions", SessionController.store);

/**
 * Ongs Routes
 */
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngValidation.post, OngController.store);

/**
 * Profile Routes
 */
routes.get("/profile", ProfileValidation.index, ProfileController.index);

/**
 * Incidents Routes
 */
routes.get("/incidents", IncidentValidation.index, IncidentController.index);
routes.post("/incidents", IncidentValidation.store, IncidentController.store);
routes.delete(
  "/incidents/:id",
  IncidentValidation.delete,
  IncidentController.delete
);

export default routes;
