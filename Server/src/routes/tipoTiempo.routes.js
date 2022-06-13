import { Router } from "express";
import {getTipoTiempo} from '../controller/tipoTiempo.controller'
const router = Router();
router.get('/getTipoTiempo',getTipoTiempo)
export default router;


