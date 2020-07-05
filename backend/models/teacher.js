/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teacher', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		't_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			comment: "null"
		},
		't_pass': {
			type: DataTypes.STRING(13),
			allowNull: true,
			comment: "null"
		},
		't_name': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'job_sel': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		't_class': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		't_ban': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'phone': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		't_hp': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		't_memo': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'job_state': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'special': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'power_key': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		't_subject': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'teacher',timestamps: false
	});
};
