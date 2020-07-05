/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_info', {
		'date_info': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'time_info': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(16),
			allowNull: true,
			comment: "null"
		},
		'food_gubun': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'food_info',timestamps: false
	});
};
