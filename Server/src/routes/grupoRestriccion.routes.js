
import { Router } from "express";
import {getGrupoRestircciones} from '../controller/grupoRestriccion.controller'
const router = Router();
router.get('/getGrupoRestircciones',getGrupoRestircciones)
export default router;
