/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Election_Cand', {
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'e_name': {
			type: DataTypes.STRING(30),
			allowNull: false,
			comment: "null"
		},
		'st_id': {
			type: DataTypes.STRING(15),
			allowNull: false,
			comment: "null"
		},
		'class': {
			type: DataTypes.STRING(2),
			allowNull: true,
			comment: "null"
		},
		'ban': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		},
		'subject': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'sort': {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: "null"
		},
		'e_sel': {
			type: DataTypes.STRING(2),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'Election_Cand',timestamps: false
	});
};
