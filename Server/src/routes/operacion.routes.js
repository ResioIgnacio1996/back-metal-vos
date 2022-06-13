import { Router } from "express";
import { saveOperacion } from '../controller/operacion.controller'
const router = Router();
router.post('/saveOperacion/:Nombre/:Nro/:idPieza/:idTipoTiempo/:Tiempo/:idGrupoOperacion/:pieza_madre', saveOperacion)
export default router; 