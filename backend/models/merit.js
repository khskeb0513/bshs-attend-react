/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('merit', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'm_date': {
			type: DataTypes.DATE,
			allowNull: false,
			comment: "null"
		},
		'm_time': {
			type: DataTypes.STRING(6),
			allowNull: false,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			comment: "null"
		},
		'merit_sel': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'merit_code': {
			type: DataTypes.STRING(5),
			allowNull: false,
			comment: "null"
		},
		'merit_text': {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "null"
		},
		'merit_point': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		't_id': {
			type: DataTypes.STRING(13),
			allowNull: true,
			comment: "null"
		},
		'bigo': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'work_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'merit',timestamps: false
	});
};
