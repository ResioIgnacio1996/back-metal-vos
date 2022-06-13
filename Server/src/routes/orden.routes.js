import { Router } from "express";
import {saveOrden} from '../controller/orden.controller'
 const router = Router();
router.post('/saveOrden/:idEstadoOrden/:nroOrden/:idPieza/:fecVen/:cantidad',saveOrden)
export default router; 