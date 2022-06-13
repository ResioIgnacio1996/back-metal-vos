import { getConection } from '../database/connection';

export const getTipoTiempo = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM TipoTiempo')
    return res.json(result);
}