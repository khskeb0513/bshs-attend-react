/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('studentinout', {
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(1),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'o_date': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'o_time': {
			type: DataTypes.STRING(6),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'in_time': {
			type: DataTypes.STRING(6),
			allowNull: true,
			comment: "null"
		},
		'w_t_id': {
			type: DataTypes.STRING(16),
			allowNull: true,
			comment: "null"
		},
		'o_memo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'studentinout',timestamps: false
	});
};
