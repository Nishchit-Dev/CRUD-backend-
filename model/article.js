const mongoose = require("mongoose")

const Model = new mongoose.Schema({
    Author:{
        type:String,
        required:true,
    },
    AuthorID:{
        type:mongoose.Schema.Types.ObjectID,
        required:true
    },
    ArticleHeading:{
        type:String,
        required:true
    },
    ArticleContent:{
        type:String,
        required:true
    },
    ArticleLikes:{
        type:Number
    },
})

const articleModel = mongoose.model("articleModel",Model)

module.exports={articleModel}