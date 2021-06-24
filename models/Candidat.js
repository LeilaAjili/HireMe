const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidatSchema = new Schema({
    
    nom:{
        type:String,     
    },

    prenom:{
        type:String,     
    },

    email:{
        
         type : String,
          required:true,
          unique : true
        
      },

      adresse:{
        type : String,
      },

      tel:{
          type : Number
      },
      tel2:{
        type : Number
    },
    

    // cv:{
    //     type : Buffer
    // },

    // diplome:{
    //     type : Buffer
    // }

    
  
});


  

module.exports = Candidat = mongoose.model('candidat', CandidatSchema);