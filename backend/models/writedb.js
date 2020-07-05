/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('writedb', {
		'writeDate': {
			type: DataTypes.STRING(8),
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
		tableName: 'writedb',timestamps: false
	});
};
