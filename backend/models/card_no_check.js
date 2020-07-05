/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('card_no_check', {
		'job_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'card_no_check',timestamps: false
	});
};
