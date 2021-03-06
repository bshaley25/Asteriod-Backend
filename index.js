express =  require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('./knex') 

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.listen(PORT, console.log(`out here on port ${PORT}`))

app.get('/', (req,res) => {
    
    displayRequest(req)
    knex('scores')
    .orderBy('score', 'desc')
    .limit(10)
    .then(rows => res.json(rows))

})

app.post('/', (req,res) => {

    asteriodScore = parseInt(req.body.score)
    displayRequest(req)
    knex('scores')
    .insert({ score: asteriodScore })
    .then(res.json({status: "all good famalam"}))

})

function displayRequest(req) {
    console.log(req.rawHeaders)
}