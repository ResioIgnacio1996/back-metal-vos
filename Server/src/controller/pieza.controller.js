import { getConection } from '../database/connection';
export const savePieza = async (req, res) => {
    console.log(req.body)
    const pool = await getConection();
    var idEmpresa = req.params.idEmpresa
    var nombre=req.params.nombre
    var descripcion =req.params.descripcion
    const result = await pool.request().query(`insert into Pieza(Nombre,Descripcion,IdEmpresa) values('${nombre}','${descripcion}',${idEmpresa})`)
    return res.json(result) 
}       

export const getPiezas = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT Id,Nombre FROM Pieza')
    console.log(result)
    return res.json(result); 
} 

export const getUltimaPieza = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT MAX(Id) as id FROM Pieza')
    console.log(result)
    return res.json(result); 
} 