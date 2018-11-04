const mongoose = require('mongoose');
const express  = require('express');
const User     = require('../model/user');
const Location = require('../model/location');
const Match    = require('../model/match');

//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com

module.exports ={
    operation : function (){
        Location.find({}).exec((err,fun) =>{
            var lat1;
            var lon1;
            var lat2;
            var lon2;
            var iduser1;
            var iduser2;
            fun.forEach(fun1 => {
                var copy = [];
                fun.forEach((fun2 , i) => {
                    lat1    = fun1.location[0];  //info user 1
                    lon1    = fun1.location[1]; 
                    iduser1 = fun1.idUser;
                    lat2    = fun2.location[0];  //info user 2
                    lon2    = fun2.location[1];
                    iduser2 = fun2.idUser;
                    //Algorthims of check locations
                    var radlat1 = Math.PI * lat1/180;
                    var radlat2 = Math.PI * lat2/180;
                    var theta = lon1-lon2;
                    var radtheta = Math.PI * theta/180;
                    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                    if (dist > 1) {
                        dist = 1;
                    }
                    dist = Math.acos(dist);
                    dist = dist * 180/Math.PI;
                    dist = dist * 60 * 1.1515;
                    dist = dist * 1.609344;
                    if (iduser1 != iduser2 && dist <= 3 ) {  
                        copy.push(iduser2)
                        if (fun.length -1  === i) { 
                        Match.updateMany({userId1 : iduser1} , {userId2 : copy } , { upsert : true } , (err , doc)=>{
                        }).catch(err1 =>{
                            console.log({error1:err1 });
                        });
                    }
                    } else {
                        return
                        //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                        //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                    }
                });
            });
            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
        });
    }
}

