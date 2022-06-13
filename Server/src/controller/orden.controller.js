import { getConection } from '../database/connection';
export const saveOrden = async (req, res) => {
    const pool = await getConection();
    debugger;
    var idEstado = req.params.idEstadoOrden;
    var nroOrden = req.params.nroOrden;
    var idPieza = req.params.idPieza;
    var fecVen = req.params.fecVen;
    var cantidad = req.params.cantidad;
    const result = await pool.request().query(`insert into Orden(Cantidad,FechaVencimiento,idEstadoOrden,Nro,IdPieza) values(${cantidad},'${fecVen}',${idEstado},'${nroOrden}',${idPieza})`)
    return res.json(result) 
}         

