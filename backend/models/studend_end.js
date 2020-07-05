/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('studend_end', {
		'o_date': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'o_time': {
			type: DataTypes.STRING(6),
			allowNull: false,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(2),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'STD_NAME': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'studend_end',timestamps: false
	});
};
