const SignUp = require("../model/user");
const joi = require("joi");
const jwtHelper = require("../helper/jwt");

const joiSchema = joi.object({
  email: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});

const validate = (data) => {
  return joiSchema.validate(data);
};

const Task = async (data) => {
  var isValid = validate(data);

  if (isValid.error) {
    new Error().message("inValid data");
    return false;
  } else {
    return true;
  }
};

exports.SignUpData = async (data) => {
  return Task(data)
    .then(async() => {
      let doesExist =await SignUp.cred.findOne({ email: data.email });
      if (doesExist) {        
        return {flag:false,message:"user already exist"}
      } else {
        doesExist = new SignUp.cred({
          email: data.email,
          username: data.username,
          password: data.password,
        })

        await doesExist.save()

        var userToken = jwtHelper.jwtObj.generateToken(data);

        return { flag: true, token: userToken };
      }
    })
    .catch((err) => {
      console.log("data Could not be inserted");
      return { flag: false };
    });
};
