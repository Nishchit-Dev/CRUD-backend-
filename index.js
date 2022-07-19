const express = require("express")
const app = express();
const dotenv = require('dotenv').config();
const router = require('./routes/routes')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.use('/user',router)


const connectToMongo = async()=>{
    let url = process.env.mongoURL || "mongodb://localhost:27017"
    return mongoose.connect(url).then((res)=>{

        app.listen(process.env.PORT || 2022 , ()=>{
            console.log("listing to port",process.env.PORT || 2022)
        })

        return true 

    }).catch((err)=>{
        return false
    })
}

connectToMongo().then(res=>{
    console.log("connected established")
}).catch(err=>{
    console.log("connection could not established")
})
