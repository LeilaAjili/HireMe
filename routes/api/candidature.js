const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const mongoose = require("mongoose");
const candidature = require('../../models/Candidature');
const Candidat = require('../../models/Candidat');
const annonce = require('../../models/Annonce');


//@route  GET api/candidatures avec limite
//@desc   Afficher toutes les candidatures limitées à 7
router.get('/', (req,res) => {
    candidature.find()
    .sort({dateCreation:-1})
    .limit(7)
    .then(candidature => res.json(candidature) );
});

//@route  POST api/candidature
//@desc   ajouter une candidature
//@access public
router.post('/', async (req, res) => {
    const nvelleCandidature = new candidature({

        refAnnonce:req.body.refAnnonce,
        emailCandidat : req.body.email,
        nom : req.body.nom,
        prenom : req.body.prenom
        

    });
  
    try {
      const candidature = await nvelleCandidature.save();
      if (!candidature) throw Error('Something went wrong saving the item');
  
      res.status(200).json(candidature);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });




  router.get('/ann', (req,res) => {
    candidature.find()
  
  .populate('annonce').exec((err, candidature) => {
    console.log("Populated User " + candidature);
  })
})

router.get('/cand', (req,res) => {
  candidature.find()
  //.select ("candidature refAnnonce")
  .populate('annonce')
  .sort({dateCreation:-1})
  .then(candidature => res.json(candidature), res.json(Annonce));
});
  
  
//@route  GET api/candidatures 
//@desc   Afficher toutes les candidatures 
router.get('/cands', (req,res) => {
  candidature.find()
  .sort({dateCreation:-1})
  
  .then(candidature => res.json(candidature.length) );
});


  
  




  module.exports = router;


