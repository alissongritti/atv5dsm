import { Router } from "express";
import { last, findByNumber } from "../controllers/MegaController";

const routes = Router();

routes.get("/", last);
routes.get("/:concurso", findByNumber);

export default routes;