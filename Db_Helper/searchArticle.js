const joi = require("joi");
const ArticleModel = require("../model/article");

const schema = joi.object({
  Author: joi.string(),
  ArticleHeading: joi.string(),
});

const validate = (data) => {
  return schema.validate(data);
};

const task = async (data) => {
  let validation = validate(data);

  if (validation.error) {
    return { flag: false, message: "inValid Data" };
  } else {
    return search(data);
  }
};

const search = async (data) => {
  let fetchedData = [];
  return await ArticleModel.articleModel.db.collection("articlemodels")
    .aggregate([
      {
        $project: {
          Author: 1,
          ArticleHeading: 1,
          ArticleContent: 1,
          AuthorID: 1,
        },
      },
      { $match: { Author: { $regex: data.Author } } },
      { $limit: 3 },
    ])
    .forEach(ele=> {
      fetchedData.push(ele);
    })
    .then((res) => {
      return fetchedData;
    });
};

module.exports = {
  search,
};
