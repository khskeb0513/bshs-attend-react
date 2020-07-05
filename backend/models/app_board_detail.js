/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('app_board_detail', {
		'seq': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'board_seq': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'cnt': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(1),
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
		}
	}, {
		tableName: 'app_board_detail',timestamps: false
	});
};
