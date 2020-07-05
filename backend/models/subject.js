/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subject', {
		'class': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'subject': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'subject',timestamps: false
	});
};
