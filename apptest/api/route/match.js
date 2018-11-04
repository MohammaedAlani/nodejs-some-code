const mongoose  =  require('mongoose');
const express   =  require('express');
const multer    =  require('multer');
const Match     =  require('../model/match');
const User      =  require('../model/user');


//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
module.exports = {
    matches : function() {
        User.find().exec().then(doc =>{
            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
        var a,b = Number;
        var arr1,arr2 = new Array();
        function compare (a,b) {                               //function sort array
            return a-b;
        };
            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
        function comparearray(arr1 , arr2) {                   //function compare two arrary 
            favsort.length === favesort2.length && favsort.every((value , index) => { 
                return value === favesort2[index] 
            });
            return true;
            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
        }
    doc.forEach(us=>{
        userid1 =  us._id;                                     // get user1 id form collection users == okay
        Match.find({ userId1 : userid1 }).exec().then(infomatchuser1=>{
            infomatchuser1.forEach(mmm=>{
                arraruuser2 = mmm.userId2;
                arraruuser2.forEach(nnn=>{
                    User.find({_id : nnn}).exec().then(user2=>{
                        user2.forEach(infouser2=>{
                            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                            userId2    =  infouser2._id;       // get user2 information form collection users == okay
                            name2      =  infouser2.firstname;
                            favorite2  =  infouser2.favorite;
                            gender2    =  infouser2.gender;
                            favesort2  =  favorite2.sort(compare(a,b));
                            user1      =  us._id;              // get user 1 info from users collection with every loop
                            nam1       =  us.firstname;
                            fav1       =  us.favorite;
                            gender1    =  us.gender;
                            favsort    =  fav1.sort(compare(a,b));
                            if (comparearray(favsort , favesort2) && gender1 != gender2) {   //if true then send notfaction
                            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                                console.warn(`${nam1} and has id ${user1} is match with ${name2} and has id ${userId2}`);                                         
                            }
                            return
                            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                        });
                    }).catch(err=>{
                            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                        console.log({errorfinduser2 : err});
                        
                    });
                });
            });
            }).catch(err=>{
                            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
                console.log({error : err});
            });
        });
                            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com  
        }).catch(err=>{
            console.log({erroruser : err});
            //code bu Mohammed Younis Alani email yaldez.1991@gmail.com
            });        

    }
}
    

//code bu Mohammed Younis Alani email yaldez.1991@gmail.com

