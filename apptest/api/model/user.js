const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    _id       : mongoose.Schema.Types.ObjectId,
    firstname : {type : String, required : true},
    lastname  : {type : String, required : true},
    email     : {type : String, required : true, unique: true},
    password  : {type : String, required : true},
    gender    :  Number,
    favorite  : [Number], 
    age       :  Number 
});
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
module.exports = mongoose.model('Users',usersSchema);