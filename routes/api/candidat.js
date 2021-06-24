const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const candidat = require('../../models/Candidat');


//@route  GET api/candidats
//@desc   Afficher tous les candidats
router.get('/', (req,res) => {
    candidat.find()
    .sort({nom:-1})
    .then(candidat => res.json(candidat) );
});

//@route  GET api/candidat
//@desc   trouver un candidat


router.get('/:email', (req,res) => {
  candidat.findOne({email:req.params.email})
  
  .then(candidat => res.json(candidat) );
});




//@route  POST api/candidat
//@desc   ajouter un candidat
//@access public
router.post('/', async (req, res) => {
    const nvCandidat = new candidat({

        nom:req.body.nom,
        prenom : req.body.prenom,
        email : req.body.email,
        adresse : req.body.adresse,
        tel : req.body.tel,
        tel2 : req.body.tel2

    });
     
    try {

      // candidat.findOne({email}).then(candidat => {
      //   if(candidat) return res.status(400).json ({ msg: 'candidat non existant!'});
    
      const candidat = await nvCandidat.save();
      if (!candidat) throw Error('Something went wrong saving the item');
    
      res.status(200).json(candidat);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });


  module.exports = router;


