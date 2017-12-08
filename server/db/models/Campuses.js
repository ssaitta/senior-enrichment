'use strict';

const db = require ('../index.js')
const Sequelize = require('sequelize');

const Campuses = db.define('campuses',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/en/4/44/Welcome_to_Sunnydale_%28Buffy_screenshot%29.jpg'

    },
    description:{
        type: Sequelize.STRING(5000),

    }
})

module.exports = Campuses