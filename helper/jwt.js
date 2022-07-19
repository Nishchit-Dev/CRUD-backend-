const jwt = require("jsonwebtoken")

const jwtObj = {}

jwtObj.generateToken = (data)=>{
    var newToken = jwt.sign(data,process.env.tokenSecret,{expiresIn:"30d"})

    return newToken;
}       

jwtObj.verfiyToken = (data,rawData)=>{
    var dataObj = {
        email:data.email,
        password:data.password,
        username:data.username,
        time:Date.now()
    }
    var decode = jwt.verify(dataObj,process.env.tokenSecret)
    if(decode.password === password){
        return true
    }else{
        return false
    }
}

module.exports={jwtObj}