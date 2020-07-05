/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_teacher_info', {
		'tc_id': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'tc_day': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'tc_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'tc_fgubun': {
			type: DataTypes.STRING(6),
			allowNull: true,
			comment: "null"
		},
		'tc_count': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'food_teacher_info',timestamps: false
	});
};
