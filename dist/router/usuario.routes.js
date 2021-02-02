"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const bodyParser = require("body-parser");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.urlencodedParser = bodyParser.urlencoded({ extended: true });
        this.configRouter();
    }
    configRouter() {
        this.router.route('/api/usuario').get(usuario_controller_1.getUsuarios);
        this.router.route('/api/usuario/:id').get(usuario_controller_1.getUsuario);
        this.router.route('/api/usuario').post(this.urlencodedParser, usuario_controller_1.postUsuarios);
        this.router.route('/api/usuario/:id').delete(usuario_controller_1.deleteUsuario);
        this.router.route('/api/usuario/:id').put(this.urlencodedParser, usuario_controller_1.updateUsuario);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
