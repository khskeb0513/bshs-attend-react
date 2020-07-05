/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('edufine_a', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'st_id': {
			type: DataTypes.STRING(15),
			allowNull: true,
			comment: "null"
		},
		'edu_sel': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'money_sel': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'two_sel': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'u_money': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'edufine_a',timestamps: false
	});
};
