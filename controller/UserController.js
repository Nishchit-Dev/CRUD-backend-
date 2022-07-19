const credModel = require("../model/user");
const SignUp = require("../Db_Helper/SignUp");
const Login = require("../Db_Helper/LogIn")
exports.SignUp = (req, res) => {
    var t = SignUp.SignUpData(req.body);

    t.then(re=>{
        res.send(re)
    })
};

exports.LogIn = (req, res) => {
 Login.Login(req.body).then(r=>{
    // console.log(r)
    res.send(r)
 }).catch(err=>{
    console.log(err);
    res.send({ flag: false, message: err  })
 })
};
