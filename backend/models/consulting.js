/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('consulting', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'st_id': {
			type: DataTypes.STRING(16),
			allowNull: true,
			comment: "null"
		},
		'c_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'c_people': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'c_sel': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		't_id': {
			type: DataTypes.STRING(13),
			allowNull: true,
			comment: "null"
		},
		'c_text': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'c_state': {
			type: DataTypes.STRING(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'consulting',timestamps: false
	});
};
