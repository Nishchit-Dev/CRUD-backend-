const joi = require("joi");
const ArticleModel = require("../model/article");

joi.objectId = require('joi-objectid')(joi)

const schema = joi.object({
  Author: joi.string().required(),
  AuthorID: joi.string().required(),
  ArticleHeading: joi.string().required(),
  ArticleContent: joi.string().required(),
});

const validate = (data) => {
  return schema.validate(data);
};

const task = async (data) => {
  let validation = validate(data);
  if (validation.error) { 
    console.log(validation.error.details[0])
    return {flag:false,message:"inValid Data"}
  } else {
    return Add(data).then(res=>{
        return res
    })
  }
};

const Add = async(data)=>{
    let newArticle = new ArticleModel.articleModel({
        Author: data.Author,
        AuthorID: data.AuthorID,
        ArticleHeading: data.ArticleHeading,
        ArticleContent: data.ArticleContent,
        ArticleLikes:0
      });
      await newArticle.save();
      console.log(newArticle)
      return newArticle
}

module.exports={task}