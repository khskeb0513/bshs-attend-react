/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_diet', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'j_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'breakfast': {
			type: DataTypes.STRING(300),
			allowNull: true,
			comment: "null"
		},
		'lunch': {
			type: DataTypes.STRING(300),
			allowNull: true,
			comment: "null"
		},
		'dinner': {
			type: DataTypes.STRING(300),
			allowNull: true,
			comment: "null"
		},
		'reg_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'reg_id': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_diet',timestamps: false
	});
};
