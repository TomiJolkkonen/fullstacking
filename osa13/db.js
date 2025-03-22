// asenna tarvittavat riippuvuudet: npm install express sequelize pg pg-hstore

// db.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:password@localhost:5432/tietokanta');

const Kayttaja = sequelize.define('Kayttaja', {
  nimi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Blogi = sequelize.define('Blogi', {
  otsikko: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sisalto: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Kayttaja.hasMany(Blogi);
Blogi.belongsTo(Kayttaja);

module.exports = { sequelize, Kayttaja, Blogi };

