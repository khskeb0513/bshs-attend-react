/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discip_code', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'd_text': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'st_point': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'ed_point': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'discip_code',timestamps: false
	});
};
