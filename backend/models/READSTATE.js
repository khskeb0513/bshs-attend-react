/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('READSTATE', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'phone': {
			type: DataTypes.STRING(16),
			allowNull: true,
			comment: "null"
		},
		'role': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'notikind': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'url': {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: "null"
		},
		'listnum': {
			type: DataTypes.STRING(10),
			allowNull: true,
			comment: "null"
		},
		'subject': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'writedate': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'readdate': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'READSTATE',timestamps: false
	});
};
