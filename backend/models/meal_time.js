/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('meal_time', {
		'm_time': {
			type: DataTypes.STRING(8),
			allowNull: false,
			comment: "null"
		},
		'e_time': {
			type: DataTypes.STRING(8),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'meal_time',timestamps: false
	});
};
