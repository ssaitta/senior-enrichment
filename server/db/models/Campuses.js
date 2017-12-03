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
        type: Sequelize.VIRTUAL,
        get(){
            return `../../api/campuses/${this.id}/image`
        }
    },
    description:{
        type: Sequelize.STRING(5000),

    }
})

module.exports = Campuses