const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const config = require ('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


//User Model
const User = require ('../../models/User');


//@route  POST api/users
//@desc   Register new user
//@access Public 

router.post('/',  (req, res) => {
const {name, email, password} = req.body;

if(!name || !email || !password )  {
    return res.status(400).json({ msg : 'Veuillez saisir tous les champs!'})
} 


User.findOne({email}).then(user => {
    if(user) return res.status(400).json ({ msg: 'Utilisateur existant!'});

//  if(check('email').isEmail())

//     return res.status(400).json({ msg: 'Veuillez saisir un email valide' });
  



    const  newUser = new User({
        name,
        email,
        password
    });

    // CReate SALT & HASH
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {

                jwt.sign(
                    {id: user.id},
                    config.get ('jwtSecret'),
                    {expiresIn : 3600}, 
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user:{
                                name:user.name,
                                email : user.email
                            }
                        });
                    }
                )


                
            });
        })
    })
})
});

module.exports = router