/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('idcard', {
		'reDate': {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'teacherCode': {
			type: DataTypes.STRING(13),
			allowNull: true,
			comment: "null"
		},
		'teacherName': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'sendDate': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		},
		'recivDate': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		},
		'idCard': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'idcard',timestamps: false
	});
};
