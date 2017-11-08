const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || 3001

http.createServer(app).listen(PORT)