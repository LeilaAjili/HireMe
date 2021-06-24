const mongoose = require ('mongoose');
//require('mongoose-type-email');

//import { isEmail } from 'validator';


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      // type : mongoose.SchemaType.email,
       type : String,
        required:true,
        unique : true
       //validate: [ isEmail, 'invalid email' ]
    },
    password:{
        type : String,
        required : true
    }
});

module.exports = User = mongoose.model('user', UserSchema);