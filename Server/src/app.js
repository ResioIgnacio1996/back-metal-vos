import express from 'express';
import config from './config';
import routerEmpresa from './routes/empresa.routes';
import routerGrupoRecurso from './routes/grupoRecurso.routes';
import routerGrupoRestriccion from './routes/grupoRestriccion.routes';
import routerOrden from './routes/orden.routes';
import routerPieza from './routes/pieza.routes'
import routerTipoRecurso from './routes/tipoRecurso.routes'
import routerTipoTiempo from './routes/tipoTiempo.routes'
import routerEstadoOrden from './routes/estado-orden.routes'
import routesOperacion from './routes/operacion.routes'
const app= express();
let port;
app.set('port', config.port || '3000')
app.use(routerEmpresa)
app.use(routerGrupoRecurso)
app.use(routerGrupoRestriccion)
app.use(routerOrden)
app.use(routerPieza)
app.use(routerTipoRecurso)
app.use(routerTipoTiempo)
app.use(routerEstadoOrden)
app.use(routesOperacion)
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:4000');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});
export default app;  