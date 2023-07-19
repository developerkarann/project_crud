const express = require('express')
require('./database')

const app = express();
const PORT = 8080 || process.env.PORT
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('Hello world!')   
})

app.listen(PORT, ()=>{
    console.log(`Server is ruunig on port ${PORT}`)
})