import { Router } from "express";
import {getEstadoOrden} from '../controller/estado-orden.controller'
const router = Router();
router.get('/getEstadoOrden',getEstadoOrden)  
export default router;
