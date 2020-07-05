/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sms', {
		'studentcode': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'smsDate': {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'smsTime': {
			type: DataTypes.STRING(6),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'meritCode': {
			type: DataTypes.STRING(5),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'studentname': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'sClass': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'sTeam': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'sNum': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'fNumber': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'tNumber': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'sms': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'sendDate': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'sms',timestamps: false
	});
};
