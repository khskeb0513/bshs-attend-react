/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_teacher', {
		'tc_id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'tc_name': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'tc_cardnum': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'food_teacher',timestamps: false
	});
};
