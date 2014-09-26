var Sequelize = require( 'sequelize' );

var sequelize = require( 'sequelize' ).LOCAL;

var Users = sequelize.define( 'users', {
	'id' : {
		'type'         : Sequelize.UUID,
		'primaryKey'   : true,
		'defaultValue' : Sequelize.UUIDV4
	},
  	'username' : {
		'type'      : Sequelize.STRING,
		'allowNull' : false
	},
	'createdAt' : Sequelize.DATE,
	'updatedAt' : Sequelize.DATE
} );

module.exports = Users;