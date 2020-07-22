
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const morgan = require('morgan')

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/', require('./Routes'))


const port = process.env.port || 3001
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})


