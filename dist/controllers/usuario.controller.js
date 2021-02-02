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
exports.updateUsuario = exports.deleteUsuario = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = exports.usuarioController = void 0;
const database_1 = require("../sql/database");
class UsuarioController {
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.connectDB();
            const dataUsuarios = yield connection.query(`
        SELECT nombre nombre_usuario, cedula cedula_usuario
        FROM usuario`);
            return res.json({
                ok: "true",
                usuario: dataUsuarios
            });
        });
    }
    createUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUsuarios = req.body;
            console.log(newUsuarios);
            return res.json({
                msg: "usuarios creado",
                usuarios: newUsuarios
            });
        });
    }
}
exports.usuarioController = new UsuarioController();
//==============================================================================
//otra forma de utilizar get, post, put y delete
//===============================================================================
//obtener usuarios
function getUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connectDB();
        const data = yield conn.query(`
         SELECT *
         FROM usuario
    `);
        return res.json({
            ok: "true",
            results: data
        });
    });
}
exports.getUsuarios = getUsuarios;
;
//Obtener un usuario
function getUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield database_1.connectDB();
        const User = yield conn.query('SELECT * FROM usuario WHERE id = ?', [id]);
        return res.json({
            ok: true,
            user: User[0]
        });
    });
}
exports.getUsuario = getUsuario;
//crear nuevo usuario
function postUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUsuario = req.body;
        const conn = yield database_1.connectDB();
        const dataUser = yield conn.query('INSERT INTO usuario SET ?', [newUsuario]);
        console.log(newUsuario);
        return res.json({
            msg: "usuario creado",
            user: dataUser
        });
    });
}
exports.postUsuarios = postUsuarios;
;
//Eliminar usuario
function deleteUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield database_1.connectDB();
        yield conn.query('DELETE  FROM usuario WHERE id = ?', [id]);
        return res.json({
            msg: "usuario elminado"
        });
    });
}
exports.deleteUsuario = deleteUsuario;
//actualizar usuario
function updateUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const updateUser = req.body;
        const conn = yield database_1.connectDB();
        yield conn.query('UPDATE usuario SET ? WHERE id = ?', [updateUser, id]);
        return res.json({
            message: "dato actualizado"
        });
    });
}
exports.updateUsuario = updateUsuario;
