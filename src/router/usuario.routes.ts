import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuarios, updateUsuario, usuarioController  } from '../controllers/usuario.controller';
import bodyParser = require('body-parser');

class UsuarioRoutes {

    public router : Router = Router();
    public urlencodedParser = bodyParser.urlencoded({extended:true});


    constructor(){
       this.configRouter();
       
    }

    configRouter():void{
         this.router.route('/api/usuario').get( getUsuarios);
         this.router.route('/api/usuario/:id').get( getUsuario );
         this.router.route('/api/usuario').post( this.urlencodedParser, postUsuarios );
         this.router.route('/api/usuario/:id').delete(deleteUsuario);
         this.router.route('/api/usuario/:id').put(this.urlencodedParser, updateUsuario);

    }



}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;
