/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_menu', {
		'daymenu': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'breakfast': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lunch': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'dinner': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'food_menu',timestamps: false
	});
};
