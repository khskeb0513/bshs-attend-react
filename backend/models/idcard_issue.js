/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('idcard_issue', {
		'st_id': {
			type: DataTypes.STRING(26),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		's_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'e_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(6),
			allowNull: true,
			comment: "신청,도착"
		},
		'rce_rf_card': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'idcard_issue',timestamps: false
	});
};
