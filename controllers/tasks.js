var tasks = require( '../models/Tasks' );

exports.createTask = function ( req, res, next ) {
	tasks.create( {
		'taskName' : req.body.taskName
	} ).success( function( data ) {
		var output = ( data ) ? data : '';

		res.send( output );
		next();
	} ).error( next );
};

exports.updateTask = function ( req, res, next ) {
	tasks.find( {
		'where' : { 'id' : req.params.id }
	} ).success( function( data ) {
		data.taskName = req.body.taskName;

		data.save().success( function () {
			res.send( 'task updated' );
			next();
		} ).error( next );

		next();
	} ).error( next );
};

exports.updateStatus = function ( req, res, next ) {
	tasks.find( {
		'where' : { 'id' : req.params.id }
	} ).success( function( data ) {
		data.taskStatus = req.body.taskStatus;

		data.save().success( function () {
			res.send( 'status updated' );
			next();
		} ).error( next );

		next();
	} ).error( next );
};

exports.deleteTask = function ( req, res, next ) {
	tasks.find( {
		'where' : { 'id' : req.params.id }
	} ).success( function( data ) {
		data.destroy().success( function () {
			res.send( 'task deleted' );
			next();
		} ).error( next );

		next();
	} ).error( next );
};

exports.getTaskById = function ( req, res, next  ) {
	tasks.find( {
		'where' : { 'id' : req.params.id }
	} ).success( function ( data ) {
		var output = ( data ) ? data : '';

		res.send( output );
		next();
	} ).error( next );
};

exports.getAllTasks = function ( req, res, next ) {
	tasks.findAll().success( function ( data ) {
		var output = ( data ) ? data : '';

		res.send( output );
		next();
	} ).error( next );
};

exports.searchTaskByName = function ( req, res, next ) {
	tasks.findAll( {
		'where' : {
			'taskName' : {
				'like' : '%' + req.body.taskName + '%'
			}
		},
		'order' : '"taskName" ASC'
	} ).success( function ( data ) {
		var output = ( data ) ? data : '';

		res.send( output );
		next();
	} ).error( next );
};

module.exports = exports;
