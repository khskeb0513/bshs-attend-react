/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('parent_info', {
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'post': {
			type: DataTypes.STRING(7),
			allowNull: true,
			comment: "null"
		},
		'address1': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'address2': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'h_phone': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		'm_name': {
			type: DataTypes.STRING(10),
			allowNull: true,
			comment: "null"
		},
		'm_hp': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		'f_name': {
			type: DataTypes.STRING(10),
			allowNull: true,
			comment: "null"
		},
		'f_hp': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		'who_sms': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'st_hp': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'parent_info',timestamps: false
	});
};
