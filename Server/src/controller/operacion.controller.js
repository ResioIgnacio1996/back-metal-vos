import { getConection } from '../database/connection';
export const saveOperacion = async (req, res) => {
    console.log(req.body)
    const pool = await getConection();
    var Nombre = req.params.Nombre
    var Nro=req.params.Nro
    var idTipoTiempo =req.params.idTipoTiempo
    var Tiempo =req.params.Tiempo
    var idGrupoOperacion =req.params.idGrupoOperacion
    var idPieza = req.params.idPieza
    var pieza_madre=req.params.pieza_madre
    console.log(`insert into Operacion(Nombre,IdPieza,PiezaMadre,Tiempo,IdTipoTiempo,IdGrupoOperacion,Nro) values('${Nombre}',${idPieza},'${pieza_madre}','${Tiempo}',${idTipoTiempo},${idGrupoOperacion},'${Nro}')`)
    const result = await pool.request().query(`insert into Operacion(Nombre,IdPieza,PiezaMadre,Tiempo,IdTipoTiempo,IdGrupoOperacion,Nro) values('${Nombre}',${idPieza},'${pieza_madre}','${Tiempo}',${idTipoTiempo},${idGrupoOperacion},'${Nro}')`)
    return res.json(result)  
}           
  