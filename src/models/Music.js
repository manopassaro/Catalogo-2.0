require('dotenv').config();
const Sequelize = require('sequelize');
const connection = require('../database/db');
// const database = require("../database/db");

const Song = connection.define("music", {
    id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    nome: {
            type: Sequelize.STRING,
            alllowNull: false
    },
    autor: {
            type: Sequelize.STRING,
            alllowNull: false
    },
    album: {
            type: Sequelize.STRING,
            alllowNull: false
    },
    capa: {
            type: Sequelize.STRING,
            alllowNull: false
    }
},
    {
        freezeTaableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
});

module.exports = Song;
