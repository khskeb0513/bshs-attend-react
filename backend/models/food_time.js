/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_time', {
		'foodb1': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'foodb2': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'foodl1': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'foodl2': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'foodd1': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'foodd2': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'food_time',timestamps: false
	});
};
