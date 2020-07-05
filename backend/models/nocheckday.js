/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nocheckday', {
		'noCheckDay': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'nocheckday',timestamps: false
	});
};
