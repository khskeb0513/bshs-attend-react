/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_school_noti', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'title': {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: "null"
		},
		'cnt': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'img': {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: "null"
		},
		'reg_id': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'reg_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'reg_state': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'flag': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'rec_state': {
			type: DataTypes.STRING(10),
			allowNull: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'ban': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_school_noti',timestamps: false
	});
};
