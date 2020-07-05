/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('studenthistory', {
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'class1': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		't_info1': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'class2': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		't_info2': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'class3': {
			type: DataTypes.STRING(5),
			allowNull: true,
			comment: "null"
		},
		't_info3': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'studenthistory',timestamps: false
	});
};
