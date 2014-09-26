var restify   = require( 'restify' );
var Sequelize = require( 'sequelize' );

Sequelize.LOCAL = new Sequelize( 'app', 'ronaldgemao', null, {
	'dialect' : 'postgres'
} );

var route  =  require( './route/users' );

var server = restify.createServer();

// Configure built-in handlers
server.use( restify.acceptParser( server.acceptable ) );
server.use( restify.queryParser() );
server.use( restify.bodyParser() );
server.use( restify.dateParser() );
server.use( restify.jsonp() );
server.use( restify.gzipResponse() );
server.use( restify.CORS() );

server.get( '/users', route.getUsers );
server.post( '/user/create', route.createUser );
server.post( '/user/search/:username', route.searchUser );
server.get( '/user/get/:id', route.getUser );
server.put( '/user/update/:id', route.updateUser );
server.del( '/user/delete/:id', route.deleteUser );

server.listen( 9000, function() {
  console.log( '%s listening at %s', server.name, server.url );
} );