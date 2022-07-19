const express = require("express")
const  router = express.Router()
const controller = require('../controller/UserController')
const articleController = require('../controller/ArticleController')

router.post('/Signup',controller.SignUp)

router.post('/Login',controller.LogIn)

router.post('/AddArticle',articleController.AddArticle)

router.post('/searchAuthor',articleController.SearchArticle)

router.post('/Like',articleController.Like)

router.post('/delete',articleController.delete)

module.exports  = router
