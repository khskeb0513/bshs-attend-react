/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_feed', {
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
		'end_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'breakfast': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'lunch': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'dinner': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'smsflag': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'parentflag': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'viewflag': {
			type: DataTypes.STRING(1),
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
		}
	}, {
		tableName: 'app_feed',timestamps: false
	});
};
