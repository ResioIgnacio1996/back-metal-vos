import { getConection } from '../database/connection';

export const getGrupoRecurso = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM GrupoRecurso')
    return res.json(result);
}