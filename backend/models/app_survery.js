/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_survery', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'doc_state': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'class': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'ban': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		'reg_state': {
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
		},
		'end_date': {
			type: DataTypes.DATE,
			allowNull: false,
			comment: "null"
		},
		'title': {
			type: DataTypes.STRING(60),
			allowNull: true,
			comment: "null"
		},
		'cnt': {
			type: DataTypes.STRING(500),
			allowNull: true,
			comment: "null"
		},
		'rec_state': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'view_state': {
			type: DataTypes.STRING(10),
			allowNull: true,
			comment: "null"
		},
		'all_state': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'img': {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_survery',timestamps: false
	});
};
