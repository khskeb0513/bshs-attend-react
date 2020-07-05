/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('education', {
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'edu_name': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'edu_st_date': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'edu_ed_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'edu_memo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'education',timestamps: false
	});
};
