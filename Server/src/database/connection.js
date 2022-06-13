import sql from 'mssql'

const dbSettings = {
    user: "IRE",
    password: "ire123",
    server: "localhost",
    database: "MetalVos",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }

}

export async function getConection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (exeption) {
        console.log(exeption)
    }

}
getConection(); 