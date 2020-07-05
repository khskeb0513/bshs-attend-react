/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_money', {
		'food_m1': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'food_m2': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'food_m3': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'food_key': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'food_money',timestamps: false
	});
};
