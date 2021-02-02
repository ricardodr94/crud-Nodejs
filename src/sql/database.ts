// get the client
const mysql = require('mysql2/promise');
 
// create the connection to database
export async function connectDB(){

// Create the connection pool. The pool-specific settings are the defaults
     const connection = await mysql.createConnection({
       host: 'localhost',
       user: 'root',
       database: 'prueba_angular_kubbox',
       connectionLimit: 10
     });

     return connection;
}

 

