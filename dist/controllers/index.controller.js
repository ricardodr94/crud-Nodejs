"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
function indexController(req, res) {
    return res.json({
        ok: "true",
        msg: "welcome to my API"
    });
}
exports.indexController = indexController;
