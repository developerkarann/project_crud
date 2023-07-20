const express = require('express')
require('./database')
const router = require('./routes/routes')
const cors = require('cors')

const app = express();
app.use(cors())
const PORT = 8080 || process.env.PORT

app.use(express.json())

app.use('/api/', router)

app.get('/',(req, res)=>{
    res.send('Hello world!')   
})

app.listen(PORT, ()=>{
    console.log(`Server is ruunig on port ${PORT}`)
})