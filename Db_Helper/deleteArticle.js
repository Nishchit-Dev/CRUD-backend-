const joi = require("joi");
const { default: mongoose } = require("mongoose");
const ArticleModel = require("../model/article");

const schema = joi.object({
  AuthorID: joi.string().required(),
  _id: joi.string().required(),
});

const validate = (data) => {
  return schema.validate(data);
};

const task = async (data) => {
  let validation = validate(data);
  if (validation.error) {
    return { flag: false, message: "inValid Data" };
  } else {
    return delete data;
  }
};

const deleteArticle = async (data) => {
  return await ArticleModel.articleModel
    .deleteOne({
      _id: mongoose.Types.ObjectId(data._id),
      AuthorID: mongoose.Types.ObjectId(data.AuthorID),
    })
    .then(() => {
      return { flag: "success", id: data._id };
    });
};

module.exports={deleteArticle}