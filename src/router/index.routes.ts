import { Router } from 'express';
import { indexController } from '../controllers/index.controller';


class IndexRoutes{

    public router : Router = Router();

    constructor(){
       this.configRouter();
    }

    configRouter():void{
         this.router.get('/', indexController );
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;