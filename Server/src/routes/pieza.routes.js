import { Router } from "express";
import {savePieza, getPiezas, getUltimaPieza}  from '../controller/pieza.controller'
const router = Router();
router.get('/getPiezas',getPiezas)
router.post('/savePieza/:nombre/:descripcion/:idEmpresa',savePieza)
router.get('/getUltimaPieza',getUltimaPieza)

export default router; 