/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('app_board', {
        'seq': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
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
        'cnt': {
            type: DataTypes.TEXT,
            allowNull: true,
            comment: "null"
        },
        'reg_date': {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "null"
        },
        'state': {
            type: DataTypes.STRING(1),
            allowNull: true,
            comment: "null"
        },
        'id': {
            type: DataTypes.STRING(50),
            allowNull: true,
            comment: "null"
        },
        'img': {
            type: DataTypes.STRING(200),
            allowNull: true,
            comment: "null"
        },
        'doc_state': {
            type: DataTypes.STRING(1),
            allowNull: true,
            comment: "null"
        }
    }, {
        tableName: 'app_board', timestamps: false
    });
};
