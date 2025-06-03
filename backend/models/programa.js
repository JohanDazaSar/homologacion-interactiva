const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Programa = sequelize.define('Programa', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facultad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'programas',
  timestamps: false,
});

module.exports = Programa;
