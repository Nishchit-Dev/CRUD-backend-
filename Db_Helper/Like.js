const mongoose = require('mongoose')
const { articleModel } = require('../model/article')

const like =async(data)=>{
    return articleModel.updateOne({_id:mongoose.Types.ObjectId(data.id)},{$inc:{ArticleLikes:1}}).then(()=>{
        return {flag:"success"}
    })
}

module.exports={
    like
}

