/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Time_History', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'JOB_ID': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'JOB_TIME': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'DayGubun': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		},
		'FirstINTime': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'SecondINTime': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'OutTime': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'Time_History',timestamps: false
	});
};
