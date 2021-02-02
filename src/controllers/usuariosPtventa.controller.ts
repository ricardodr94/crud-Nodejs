import { Request, Response } from 'express';
import { connectDB } from '../sql/database';

export async function usuarioPtventaController(req:Request, res:Response):Promise<Response> {
    const conn = await connectDB();
    const data = await conn.query(`
         SELECT usu.nombre nombre_usuario, usu.cedula cedula_usuario, pven.nombre nombre_ptventa,
                pven.ciudad ciudad_ptventa, asig.porcentaje
         FROM usuario usu, puntos_venta pven, asignacion asig 
         WHERE usu.id = asig.id_cedula AND pven.id = asig.id_ptventa
    `);

    return res.json({
        ok:"true",
        data:data
    });
    
}