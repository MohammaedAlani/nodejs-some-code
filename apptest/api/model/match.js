const mongoose = require('mongoose');
const matchSchema = mongoose.Schema({
    userId1   : String,
    userId2   : [String]
});
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
//code bu Mohammed Younis Alani email yaldez.1991@gmail.com
module.exports = mongoose.model('Match',matchSchema);
