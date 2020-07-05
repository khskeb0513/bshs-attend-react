/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('indaycheck', {
		'studentCode': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'gubunDate': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'indaycheck',timestamps: false
	});
};
