import express = require('express');
import morgan = require('morgan');
import cors = require('cors');
const bodyParser = require("body-parser");

//rutas
import indexRoutes from '../router/index.routes';
import usuarioRoutes from '../router/usuario.routes';
import UsuarioPtventaRoutes from '../router/usuariosPtventa.routes';



export default class Server{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.configPort();
        this.middlewares();
        
    }


    configPort():void{
        this.app.set('port', process.env.PORT || 3000 );
    }

    
    router():void{
        this.app.use(indexRoutes);
        this.app.use(usuarioRoutes);
        this.app.use(UsuarioPtventaRoutes);
    }

    middlewares():void{
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(express.json());
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}



