"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosPtventa_controller_1 = require("../controllers/usuariosPtventa.controller");
class UsuarioPtventaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configUsuariosPtventa();
    }
    configUsuariosPtventa() {
        this.router.get('/api/usuariosPtventa', usuariosPtventa_controller_1.usuarioPtventaController);
    }
}
const usuarioPtventaRoutes = new UsuarioPtventaRoutes();
exports.default = usuarioPtventaRoutes.router;
