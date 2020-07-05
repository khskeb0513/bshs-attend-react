/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_survery_detail', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'survery_seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'cnt': {
			type: DataTypes.STRING(500),
			allowNull: true,
			comment: "null"
		},
		'sort': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'img': {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_survery_detail',timestamps: false
	});
};
