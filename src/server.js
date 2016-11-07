import Hapi from 'hapi';
import routes from './routes';

const server = new Hapi.Server();
server.connection({ port: 8000 });

routes.forEach((route) => {
  server.route(route);
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
