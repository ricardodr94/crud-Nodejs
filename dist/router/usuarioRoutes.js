"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configRouter();
    }
    configRouter() {
        this.router.get('/api/usuario', usuario_controller_1.usuarioController);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
