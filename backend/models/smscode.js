/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('smscode', {
		'smsCode': {
			type: DataTypes.STRING(5),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'smsText': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'smsDay': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'smsTime': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'smsFStop': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'smsTStop': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'smsStop': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'smscode',timestamps: false
	});
};
