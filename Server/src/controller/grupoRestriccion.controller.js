import { getConection } from '../database/connection';

export const getGrupoRestircciones = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM GrupoRestirccion')
    console.log(result)
    return result; 
}