/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('meal_exit', {
		'st_id': {
			type: DataTypes.STRING(26),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'm_date': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'm_time': {
			type: DataTypes.STRING(6),
			allowNull: false,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(1),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'meal_exit',timestamps: false
	});
};
