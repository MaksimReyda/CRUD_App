const exptess = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = exptess()

app.use(bodyParser.urlencoded( {extended: true} ))

MongoClient.connect('mongodb+srv://maksym:sudomaksim12@cluster0.wsl4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useUnifiedTopology: true} , (err, client) =>{
    if(err){
        return console.error(err)
    }
    console.log("Conected to Database")
})

app.get('/', (req, res) =>{
    // res.send("Hello world")
    // console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
})

app.listen(3000, () =>{
    console.log("listening on 3000")
})