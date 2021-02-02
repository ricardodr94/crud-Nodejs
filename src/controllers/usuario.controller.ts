import { Request, Response } from 'express';
import { Usuarios } from '../interface/usuario';
import { connectDB } from '../sql/database';

class UsuarioController{


    public async getUsuario(req:Request, res:Response): Promise<Response>{
        const connection =await connectDB();

        const dataUsuarios =await connection.query(`
        SELECT nombre nombre_usuario, cedula cedula_usuario
        FROM usuario`);


       return res.json({
           ok:"true",
           usuario:dataUsuarios
       });
    }

    public async createUsuarios(req:Request, res:Response){
        const newUsuarios = req.body;
        console.log(newUsuarios);
        return res.json({
            msg:"usuarios creado",
            usuarios:newUsuarios
        });
    }
}


export const usuarioController = new UsuarioController();


//==============================================================================
//otra forma de utilizar get, post, put y delete
//===============================================================================


//obtener usuarios
export async function getUsuarios(req:Request, res:Response): Promise<Response> {
   
    const conn = await connectDB();
    const data = await conn.query(`
         SELECT *
         FROM usuario
    `);

    return res.json({
        ok:"true",
        results:data
    });
};

//Obtener un usuario
export async function getUsuario(req:Request, res:Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connectDB();
    const User = await conn.query('SELECT * FROM usuario WHERE id = ?',[id]);

    return res.json({
        ok:true,
        user: User[0]
    });

}

//crear nuevo usuario
export async function postUsuarios(req:Request, res:Response){
  
    const newUsuario:Usuarios = req.body;
    const conn = await connectDB();
    const dataUser = await conn.query('INSERT INTO usuario SET ?',[newUsuario]);

    console.log(newUsuario);
    return res.json({
        msg:"usuario creado",
        user:dataUser
    });

};



//Eliminar usuario
export async function deleteUsuario(req:Request, res:Response ) {

    const id = req.params.id;
    const conn = await connectDB();
    await conn.query('DELETE  FROM usuario WHERE id = ?',[id]);

    return res.json({
        msg:"usuario elminado"
        
    });

    
}

//actualizar usuario
export async function updateUsuario(req:Request, res:Response) {

    const id = req.params.id;
    const updateUser:Usuarios = req.body;
    const conn = await connectDB();

    await conn.query('UPDATE usuario SET ? WHERE id = ?',[updateUser,id ]);

    return res.json({
        message:"dato actualizado"
    });
    
}

