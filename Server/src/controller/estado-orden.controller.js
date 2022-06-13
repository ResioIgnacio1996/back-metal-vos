
import { getConection } from '../database/connection';

export const getEstadoOrden = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM EstadoOrden')
    console.log(result)
    return res.json(result); 
}