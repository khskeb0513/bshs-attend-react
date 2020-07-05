/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('New_student', {
		'st_id': {
			type: DataTypes.STRING(20),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'ban': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'num': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'subject': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'New_student',timestamps: false
	});
};
