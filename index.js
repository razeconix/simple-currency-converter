const express = require('express')
const mustache = require('mustache-express')
const app = express()

app.engine('html', mustache())
app.set('view engine', 'html')

app.use(express.static('static'))



app.use(express.urlencoded({ extended: false }))


app.get('/', require('./controllers/main'))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))