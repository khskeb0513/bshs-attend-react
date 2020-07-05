/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('temporary_card', {
		't_id': {
			type: DataTypes.STRING(6),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'rf_num': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'temporary_card',timestamps: false
	});
};
