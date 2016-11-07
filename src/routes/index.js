const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello, world!!!!!');
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {
      reply('Hello on fire great!!!, '.concat(encodeURIComponent(request.params.name)).concat('!'));
    }
  }
];

export default routes;
