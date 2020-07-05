/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dtproperties', {
		'id': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'objectid': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'property': {
			type: DataTypes.STRING(64),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'value': {
			type: DataTypes.STRING(255),
			allowNull: true,
			comment: "null"
		},
		'uvalue': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lvalue': {
			type: "IMAGE",
			allowNull: true,
			comment: "null"
		},
		'version': {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '(0)',
			comment: "null"
		}
	}, {
		tableName: 'dtproperties',timestamps: false
	});
};
