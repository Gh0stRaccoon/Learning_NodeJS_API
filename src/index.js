const express = require('express')
const routes = require('./routes/index.js')
const { server } = require('./config/config_test.js')

const app = express()
app.use(express.json())
app.use('/', routes())

app.set('port', server.port || 3000)

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
