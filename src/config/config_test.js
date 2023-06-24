if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
  server: {
    port: process.env.PORT
  }
}


module.exports = config