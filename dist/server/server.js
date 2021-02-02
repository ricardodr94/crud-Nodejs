"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
//rutas
const index_routes_1 = __importDefault(require("../router/index.routes"));
const usuario_routes_1 = __importDefault(require("../router/usuario.routes"));
const usuariosPtventa_routes_1 = __importDefault(require("../router/usuariosPtventa.routes"));
class Server {
    constructor() {
        this.app = express();
        this.configPort();
        this.middlewares();
    }
    configPort() {
        this.app.set('port', process.env.PORT || 3000);
    }
    router() {
        this.app.use(index_routes_1.default);
        this.app.use(usuario_routes_1.default);
        this.app.use(usuariosPtventa_routes_1.default);
    }
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}
exports.default = Server;
