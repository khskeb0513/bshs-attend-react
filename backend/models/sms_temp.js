/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sms_temp', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		't_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'snd_date': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'hp_num': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'msg': {
			type: DataTypes.STRING(85),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'sms_temp',timestamps: false
	});
};
