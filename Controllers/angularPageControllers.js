const { defaults } = require("pg");
const knex = require("../config/knexfile");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//registerUser
exports.regUser  = async(req,res) =>{
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const newUser = {
        mail: req.body.mail,
        password:password
    }

    try {
        knex('User')
        .insert({
            email : newUser.mail,
            password: newUser.password
        })
        .then(res.json({message: "Success!"}))
    } catch (error) {
        res.json({error:error.message})
        
    }
}