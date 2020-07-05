/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('student_back', {
		'st_id': {
			type: DataTypes.STRING(13),
			allowNull: false,
			comment: "null"
		},
		'name': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'ban': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'num': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'subject': {
			type: DataTypes.STRING(30),
			allowNull: true,
			comment: "null"
		},
		'rf_card_num': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'state': {
			type: DataTypes.STRING(1),
			allowNull: false,
			comment: "null"
		},
		'out_date': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'st_memo': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'st_lock': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		},
		'jumin': {
			type: DataTypes.STRING(14),
			allowNull: true,
			comment: "null"
		},
		'barcode_num': {
			type: DataTypes.STRING(16),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'student_back',timestamps: false
	});
};
