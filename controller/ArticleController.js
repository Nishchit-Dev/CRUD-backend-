const AddArticle = require('../Db_Helper/AddArticle')
const search = require('../Db_Helper/searchArticle')
const like = require("../Db_Helper/Like")
const remove = require("../Db_Helper/deleteArticle")

exports.AddArticle = (req,res)=>{
    var t = AddArticle.task(req.body);

    t.then(tres=>{
        res.send(tres)
    })
}

exports.SearchArticle= (req,res)=>{
    var t = search.search(req.body)

    t.then(resp=>{
        res.send(resp)
    })
}

exports.Like= (req,res)=>{
    like.like(req.body).then(resp=>{
        res.send(resp)
    })
    
}

exports.delete = (req,res)=>{
    let deleteArticle = remove.deleteArticle(req.body).then(resp=>{
        res.send(resp)
    })
}