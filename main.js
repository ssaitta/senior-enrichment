'use strict'; 

const db = require('./server/db')
const app = require('./server')
const PORT = 1337;
const models = require('./server/db/models')

db.sync({force:false}) // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced')
  app.listen(1337, () => console.log(`studiously serving silly sounds on port ${PORT}`))
});