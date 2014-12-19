var Sequelize = require( 'sequelize' );

var sequelize = require( 'sequelize' ).LOCAL;

var tasks = sequelize.define( 'Task', {
	'id' : {
		'type'         : Sequelize.UUID,
		'primaryKey'   : true,
		'defaultValue' : Sequelize.UUIDV4
	},
  	'taskName' : {
		'type'      : Sequelize.STRING,
		'allowNull' : false
	},
	'taskStatus' : {
		'type'         : Sequelize.INTEGER,
		'allowNull'    : false,
		'defaultValue' : 0
	},
	'createdAt' : Sequelize.DATE,
	'updatedAt' : Sequelize.DATE
} );

module.exports = tasks;
