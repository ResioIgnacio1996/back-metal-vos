import { Router } from "express";
import {getTipoRecurso} from '../controller/tipoRecurso.controller'
const router = Router();
router.get('/getTipoRecurso',getTipoRecurso)
export default router;