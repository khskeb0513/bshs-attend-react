/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('meritcode', {
		'm_sel_code': {
			type: DataTypes.STRING(1),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'mr_code': {
			type: DataTypes.STRING(5),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'mr_text': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'mr_point': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'group_sel': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'sms_date': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'sms_time': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'sms_parent': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'sms_teacher': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'sms_msg': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'sort': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'met_exit_sel': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'meritcode',timestamps: false
	});
};
