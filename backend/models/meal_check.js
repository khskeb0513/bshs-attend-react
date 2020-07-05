/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('meal_check', {
		'st_id': {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		's_date': {
			type: DataTypes.STRING(7),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'm_meal': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'l_meal': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'e_meal': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'meal_check',timestamps: false
	});
};
