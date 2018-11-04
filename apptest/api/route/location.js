const express   = require('express');
const mongoos   = require('mongoose');
const multer    = require('multer');
const Location  = require('../model/location');
const router    = express.Router();
const checkAuth = require('../middleware/ckeck-auth'); 
//post location if new user will save location is is user alrady will updated
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
router.post('/', checkAuth ,  (req, res, next)=>{
    Location.find({idUser : req.body.idUser}).exec().then( userid=>{
    if (userid.length >=1) {
        Location.updateMany( {idUser : req.body.idUser} , { location : req.body.location  } ,{multi: true} , (err , doc)=>{
            if(err){
                res.send(err)
            }
            res.send(doc);
        });
        } else {
            const location = new Location({
                idUser       : req.body.idUser,
                location     : req.body.location
            });
            location.save().then(resulat =>{
                res.status(201).json({
                    message : 'Location Saved',
                    status  : resulat,
                })
            }).catch(err =>{
                res.status(500).json({
                    error : err
                });
            }); 
        };
    });
}); 
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
module.exports = router;