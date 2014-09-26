var Users = require( '../model/Users' );

exports.createUser = function ( req, res, next ) {
	var filter = { 'username' : req.params.username };

	Users.create( filter ).success( function( data ) {
		res.send( data );
		next();
	} ).error( next );
};

exports.updateUser = function ( req, res, next ) {
	var filter = { 'id' : req.params.id };

	Users.find( { 'where' : filter } ).success( function( data ) {
		data.username = req.params.username;
		data.save().success( function () {
			res.send( 'updated' );
			next();
		} ).error( next );

		next();
	} ).error( next );
};

exports.deleteUser = function ( req, res, next ) {
	var filter = { 'id' : req.params.id };

	Users.find( { 'where' : filter } ).success( function( data ) {
		data.destroy().success( function () {
			res.send( 'deleted' );
			next();
		} ).error( next );

		next();
	} ).error( next );
};

exports.getUser = function ( req, res, next  ) {
	var filter = { 'id' : req.params.id };

	Users.find( filter ).success( function ( data ) {
		res.send( data );
		next();
	} ).error( next );
};

exports.getUsers = function ( req, res, next ) {
	Users.findAll().success( function ( data ) {
		res.send( data );
		next();
	} ).error( next );
};

exports.searchUser = function ( req, res, next ) {
	var filter = {
		'username' : {
			'like'  : '%' + req.params.username + '%'
		}
	};

	Users.findAll( { 'where' : filter , 'order' : 'username ASC' } ).success( function ( data ) {
		res.send( data );
		next();
	} ).error( next );
};

module.exports = exports;