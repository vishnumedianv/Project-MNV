const express= require('express')
const mongoose= require('mongoose')
const bodyparser= require('body-parser')
const cors= require('cors')
const app = express()

require('dotenv/config')

//const router = require('./Routes/user')

//middleware
app.use(bodyparser.json())
app.use(cors())


app.use(express.json())


//user router /api 
//app.use('/api',router);

app.use('/', require('./Routes/user'));
app.use('/', require('./Routes/user_account'));

//Routes
app.get('/welcome', (req,res)=>{
    res.send('Welcome to Bank of Ahmedabad')
})


//mongo connect
mongoose.connect(process.env.DB_CONNECT)
.then(()=>{console.log('connected to mongo mongodb://localhost:27017')})
.catch((err)=>{console.log(err)})



//listen
app.listen(3000, {useNewUrlParser: true,
    useUnifiedTopology: true,} , ()=>{console.log(`Running on port 3000`)})

//http://localhost:3000/