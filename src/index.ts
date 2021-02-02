import IndexRoutes from './router/index.routes';
import Server from './server/server';

//corriendo servidor
function main() {
    const server = new Server();
    server.router();
    server.start();
}

main();
