/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('schooltime', {
		'DayGubun': {
			type: DataTypes.STRING(1),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'FirstINTime': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		},
		'SecondINTime': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		},
		'OutTime': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		},
		'DBTime': {
			type: DataTypes.STRING(8),
			allowNull: true,
			comment: "null"
		},
		'Bigo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'schooltime',timestamps: false
	});
};
