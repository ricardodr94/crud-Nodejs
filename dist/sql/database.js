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
exports.connectDB = void 0;
// get the client
const mysql = require('mysql2/promise');
// create the connection to database
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create the connection pool. The pool-specific settings are the defaults
        const connection = yield mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'prueba_angular_kubbox',
            connectionLimit: 10
        });
        return connection;
    });
}
exports.connectDB = connectDB;
