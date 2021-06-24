const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const annonce = require('../../models/Annonce');

//@route  GET api/annonces
//@desc   Afficher toutes les annonces
router.get('/', (req,res) => {
    annonce.find()
    .sort({datePublication:-1})
    .then(annonce => res.json(annonce) );
});

//@route  POST api/annonce
//@desc   ajouter une annonce
//@access private
router.post('/', async (req, res) => {
    const nvelleAnnonce = new annonce({
        intitule:req.body.intitule,
        ref: req.body.ref,
        contrat : req.body.contrat,
        salaire : req.body.salaire,
        mission : req.body.mission,
        comp1 : req.body.comp1,
        comp2 : req.body.comp2,
        comp3 : req.body.comp3,
        dateExpiration : req.body.selectedDate1,
        datePriseFonction : req.body.selectedDate2,

    });
  
    try {
      const annonce = await nvelleAnnonce.save();
      if (!annonce) throw Error('Something went wrong saving the item');
  
      res.status(200).json(annonce);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
  

//@route  GET api/annonce(UNE)
//@desc   Afficher une  annonce
router.get('/:id', (req,res) => {
  annonce.findOne({_id:req.params.id})
  
  .then(annonce => res.json(annonce) );
});


//@route GET api/nom annonce by ref
router.get('/:id', (req,res) => {
  annonce.findOne({ref:req.params.id})
  
  .then(annonce => res.json(annonce.intitule) );
});


//@route  DELETE api/annonce
//@desc   supprimer une  annonce
router.delete("/:id",async(req,res)=>{
  try {
    let id=req.params.id
    await annonce.findOneAndDelete({ _id:id})
    res.send({success:true})
    
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
    
  }
})


//@route  EDIT api/annonce
//@desc   modifier une  annonce
router.put('/:id',async(req,res)=>{
  try {
    const annonceSupp=req.body
    await annonce.findOneAndUpdate({_id:req.params.id},{$set:{...annonceSupp}})
    res.send({success:true})
  } catch (err) {
    console.error(err.message)
    res.send({success:false})
     
  }
})




module.exports = router;