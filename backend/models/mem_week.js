/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mem_week', {
		'st_id': {
			type: DataTypes.STRING(16),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'date_end': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'date_receiv': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'date_start': {
			type: DataTypes.DATE,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'a_breakfast': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'a_lunch': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'a_dinner': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'breakfast': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'lunch': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'dinner': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'food_count': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'bigo1': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'bigo2': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'gubun': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'account': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'day_receiv': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'mem_week',timestamps: false
	});
};
