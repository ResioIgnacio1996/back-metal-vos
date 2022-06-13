import { getConection } from '../database/connection';

export const getTipoRecurso = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM TipoRecurso')
    console.log(result)
    return result; 
}