/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('delete_tab', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'bil_num': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'd_text': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'delete_tab',timestamps: false
	});
};
