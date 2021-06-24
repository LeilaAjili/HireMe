const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
    
    intitule:{
        type:String,
        required : true
    },
    ref:{
        type:Number
    },
    datePublication:{
        type:Date,
        default : Date.now
    },
    dateExpiration:{
        type:Date
    },
    contrat:{
        type:String,
        uppercase: true
    },
    salaire:{
        type:Number
    },
    mission:{
        type:String
    },
    comp3:{
        type:String
    },
    comp2:{
        type:String
    },
    comp1:{
        type:String
        
    },
    datePriseFonction:{
        type:Date
       
    }
  
  
});

module.exports = Annonce = mongoose.model('annonce', AnnonceSchema);