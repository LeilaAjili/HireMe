const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidatureSchema = new Schema({
    

    refAnnonce:{
        type:String, 
        default:'Spontanée'    
    },

    dateCreation:{
        type:Date,
        default : Date.now
    },

    emailCandidat:{
        type:String
    },

   
    nom:{
        type:String
    },
    prenom:{
        type : String
    }

    // lettreMotivation:{
    //     type : Buffer
    // },

    
  
});


  

module.exports = Candidature = mongoose.model('candidature', CandidatureSchema);