
import { getConection } from '../database/connection';

export const getEmpresas = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM Empresa')
    console.log(result)
    return res.json(result); 
}
export const saveEmpresa = async (req, res) => {
    console.log(req.params.nombre)
    const pool = await getConection();
    const result = await pool.request().query("insert into Empresa values('empresa3')")
    return res.json(ultimaEmpresa)
}    


