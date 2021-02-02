import { Router } from 'express';
import { usuarioPtventaController } from '../controllers/usuariosPtventa.controller';


class UsuarioPtventaRoutes{

    public router : Router = Router();

    constructor(){
       this.configUsuariosPtventa();
    }

    configUsuariosPtventa():void{
         this.router.get('/api/usuariosPtventa', usuarioPtventaController);
    }
}

const usuarioPtventaRoutes = new UsuarioPtventaRoutes();
export default usuarioPtventaRoutes.router;
