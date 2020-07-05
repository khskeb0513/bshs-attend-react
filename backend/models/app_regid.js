/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_regid', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'state': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'id': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'regid': {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'app_regid',timestamps: false
	});
};
