/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_survery_pick', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'survery_seq': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'reg_state': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'reg_id': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'reg_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'mod_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'detail_seq': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_survery_pick',timestamps: false
	});
};
