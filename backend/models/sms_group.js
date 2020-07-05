/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sms_group', {
		'g_name': {
			type: DataTypes.STRING(30),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'sms_group',timestamps: false
	});
};
