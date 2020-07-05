/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('my_info', {
		's_code': {
			type: DataTypes.STRING(3),
			allowNull: true,
			defaultValue: '0',
			comment: "null"
		},
		'sms_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			defaultValue: '0',
			comment: "null"
		},
		'sms_pass': {
			type: DataTypes.STRING(15),
			allowNull: true,
			defaultValue: '0',
			comment: "null"
		},
		'send_state': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'call_back_num': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		'school_name': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'sms_nick_name': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'chk_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'chk_pass': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'rf_pass': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		},
		'merit_pass': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		},
		'y3_sms': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'out_sms': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'rf_type': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'state_type': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'Grade_date': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		},
		'Merit_State': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'mr_sum_state': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'class_state': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'my_info',timestamps: false
	});
};
