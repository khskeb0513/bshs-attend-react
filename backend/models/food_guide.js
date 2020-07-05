/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('food_guide', {
		's_name': {
			type: DataTypes.STRING(36),
			allowNull: true,
			comment: "null"
		},
		's_class': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		's_ban': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		's_num': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		's_stid': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		's_bre': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		's_lu': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		's_di': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'food_guide',timestamps: false
	});
};
