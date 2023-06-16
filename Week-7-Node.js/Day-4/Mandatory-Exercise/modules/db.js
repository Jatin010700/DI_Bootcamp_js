const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '07012000',
    database: 'LOGIN/REGISTER'
  }
})

function createUser({fName,lName,user,email,pass,}){
  const salt = bcrypt.genSaltSync(saltRounds);

  return db('users').insert(
    {
    firstName:fName,
    lastName: lName,
    email:email,
    username:user,
    password:bcrypt.hashSync(pass, salt)
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}