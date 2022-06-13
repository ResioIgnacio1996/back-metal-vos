import { Router } from "express";
import {getGrupoRecurso} from '../controller/grupoRecurso.controller'
const router = Router();

router.get('/getGrupoRecurso',getGrupoRecurso)

export default router;