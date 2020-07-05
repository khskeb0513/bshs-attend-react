/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('school_gubun', {
		's_name': {
			type: DataTypes.STRING(36),
			allowNull: true,
			comment: "null"
		},
		's_code': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		}
	}, {
		tableName: 'school_gubun',timestamps: false
	});
};
