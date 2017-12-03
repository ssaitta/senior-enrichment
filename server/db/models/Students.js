'use strict';

const db = require ('../index.js')
const Sequelize = require('sequelize');

const Students = db.define('students',{
        first_name: {
            type: Sequelize.STRING, 
            allowNull: false
        },
        last_name:{
            type: Sequelize.STRING, 
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        gpa:{
            type: Sequelize.DECIMAL,
            validate: {
                max: 4.0,
                min:0.0
            }
        },
        name:{
            type: Sequelize.VIRTUAL,
            get(){
                return `${this.first_name} ${this.last_name}`
            }
        }
})

module.exports = Students