/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_calendar', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		's_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'e_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'title': {
			type: DataTypes.STRING(200),
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
		'file': {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_calendar',timestamps: false
	});
};
