/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('studentin', {
		'inDate': {
			type: DataTypes.DATEONLY,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'inTime': {
			type: DataTypes.STRING(6),
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
		'class': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(40),
			allowNull: true,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'STD_NAME': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'studentin',timestamps: false
	});
};
