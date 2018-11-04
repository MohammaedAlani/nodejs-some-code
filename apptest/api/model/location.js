const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({    
    idUser   : { type : mongoose.Schema.Types.ObjectId, ref : 'Users'  },
    location : { type : [Number],  min : 1000.00000000000000 , max : 9999.9999999999999 },
    create   : { type: Date, default: Date.now}
});
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com

module.exports = mongoose.model('Location',locationSchema);