"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioPtventaController = void 0;
const database_1 = require("../sql/database");
function usuarioPtventaController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connectDB();
        const data = yield conn.query(`
         SELECT usu.nombre nombre_usuario, usu.cedula cedula_usuario, pven.nombre nombre_ptventa,
                pven.ciudad ciudad_ptventa, asig.porcentaje
         FROM usuario usu, puntos_venta pven, asignacion asig 
         WHERE usu.id = asig.id_cedula AND pven.id = asig.id_ptventa
    `);
        return res.json({
            ok: "true",
            data: data
        });
    });
}
exports.usuarioPtventaController = usuarioPtventaController;
