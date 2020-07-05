/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('my_sms_info', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'my_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'group_name': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		's_name': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'post': {
			type: DataTypes.STRING(7),
			allowNull: true,
			comment: "null"
		},
		'city': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'gu': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'dong': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'address': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'e_mail': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'fax': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'phone': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'hp': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'm_memo': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'my_sms_info',timestamps: false
	});
};
