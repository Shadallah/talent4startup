const usermood = require('../models/UserModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = "abdshad@1_?ssk"



const signin = async (req, res) =>{
    try {
        
        const {email, password} = req.body
        const user = await usermood.findOne({email: email})
        if(user){
            if(!user){
                return res.status(401).json("Invalid email or password")
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(401).json({message:"Invalid Password"})
            }
        }
//generating personalize user token
        const payload = {userId:user._id}
        const idtoken = jwt.sign(payload, secret, {expiresIn: '1h'})

            res.json({message: "Login successful",
            token: idtoken
                
            })
    
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

const signup = async (req, res) =>{

    // user.create(req.body)
    //     .then(user=>res.json(user))

    
    try {

        if(
            !req.body.firstname ||
            !req.body.lastname ||
            !req.body.email ||
            !req.body.password
        ){
            return res.status(400).send({
                message: "Fill all require fields: Name, Email & Password"
            })
    
        }

        const {firstname, lastname, email, password} = req.body
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new usermood({

            firstname,
            lastname,
            email,
            password: hashPassword
        });

        const userRegdata = await user.save();
        res.status(200).json(userRegdata);
// this allso works perfectly
    // const userReg = await usermood.create(req.body)
    // res.status(200).json(userReg)

    } catch(error){

        if (error.code === 11000 && error.keyValue.email){
            res.status(400).json({message: "The Email has be used by another user"})
        }
        res.status(500).json({message: "Server Error"})
    }
    
    
    // catch (error) {
    //     console.log(error)
    //     res.status(500).json({message: error,message})
        
    // }
}
const forgotpassword = async () =>{


}

const verifymail = async () =>{


}

module.exports = {
    signin,
    signup,
    forgotpassword,
    verifymail
}