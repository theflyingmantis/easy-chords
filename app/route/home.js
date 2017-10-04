const getEasyChords = require('../services/chord_convertor.js');
exports.register = function(server, options, next) {
  server.route({
    path: '/',
    method: 'GET',
    handler:   function (request, reply) {
      reply.file('app/views/home.html');
    }
  });

  server.route({
    path: '/ping',
    method: 'GET',
    handler: function (request, reply) {
      reply('pong');
    }
  });

  server.route({
    path: '/getEasyChords',
    method: 'GET',
    handler: function(request, reply) {
      reply(getEasyChords(request.query.selectedChords));
    }
  });
  server.route({
    path: '/assets/{path*}',
    method: 'GET',
    handler:   {
      directory: {
        path: 'app/views/assets',
        redirectToSlash: true,
        index: true,
      }
    }
  });
  next();
};

exports.register.attributes = {
  name: 'homeRoute',
  version: require('../../package.json').version,
};

