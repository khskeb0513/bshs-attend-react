/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SequelizeMeta', {
		'name': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'SequelizeMeta',timestamps: false
	});
};
