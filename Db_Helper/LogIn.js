const credModel = require("../model/user");
const joi = require("joi");
const jwtHelper = require("../helper/jwt");

const joiSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const validate = (data) => {
  return joiSchema.validate(data);
};

const Task = async (data) => {
  var isValid = validate(data);

  if (isValid.error) {
    throw new Error("Invalid data").message;
  } else {
    return true;
  }
};

exports.Login = async (data) => {
  return Task(data).then((res) => {
    console.log(res);
    return credModel.cred
      .findOne({ email: data.email, password: data.password })
      .then((result) => {
        console.log(result);
        if (result) {
            var reNewToken = jwtHelper.jwtObj.generateToken(data)
          return { flag: true, id: result._id, username: result.username ,Token:reNewToken };
        } else {
          return {
            flag: false,
            message: "password or username does not matches",
          };
        }
      })
      .catch((err) => {
        return err;
      });
  });
};
