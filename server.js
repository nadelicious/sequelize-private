var restify   = require( 'restify' );
var Sequelize = require( 'sequelize' );

Sequelize.LOCAL = new Sequelize( 'app', 'ronaldgemao', null, {
	'dialect' : 'postgres'
} );

var ctrl = require( './controllers/tasks' );

// create an http server
var server = restify.createServer();

// Configure built-in handlers
server.use( restify.acceptParser( server.acceptable ) );
server.use( restify.queryParser() );
server.use( restify.bodyParser() );
server.use( restify.dateParser() );
server.use( restify.jsonp() );
server.use( restify.gzipResponse() );
server.use( restify.CORS() );

server.get( '/tasks', ctrl.getAllTasks );
server.get( '/tasks/:id', ctrl.getTaskById );
server.post( '/tasks', ctrl.createTask );
server.post( '/tasks/search-task', ctrl.searchTaskByName );
server.put( '/tasks/update-task/:id', ctrl.updateTask );
server.put( '/tasks/update-status/:id', ctrl.updateStatus );
server.del( '/tasks/delete-task/:id', ctrl.deleteTask );

server.listen( 9000, function() {
  console.log( '%s listening at %s', server.name, server.url );
} );
