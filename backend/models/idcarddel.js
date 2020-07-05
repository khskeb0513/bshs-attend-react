/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('idcarddel', {
		'cardNum': {
			type: DataTypes.STRING(9),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'readDate': {
			type: DataTypes.STRING(8),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(2),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'idcarddel',timestamps: false
	});
};
