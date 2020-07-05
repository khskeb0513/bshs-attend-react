/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_feed_pick', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'feed_seq': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'reg_id': {
			type: DataTypes.STRING(50),
			allowNull: true,
			comment: "null"
		},
		'reg_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'mod_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'choice1': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'choice2': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		},
		'choice3': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'app_feed_pick',timestamps: false
	});
};
