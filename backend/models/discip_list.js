/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discip_list', {
		'st_id': {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		'key_num': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			comment: "null"
		},
		's_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		't_id': {
			type: DataTypes.STRING(15),
			allowNull: false,
			comment: "null"
		},
		'ed_point': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'discip_list',timestamps: false
	});
};
