import { Router } from "express";
import { getEmpresas } from "../controller/empresa.controller";
import { saveEmpresa } from "../controller/empresa.controller";

const router = Router();
router.get('/getEmpresa',getEmpresas)  
router.post('/saveEmpresa/:nombre',saveEmpresa)
export default router;    