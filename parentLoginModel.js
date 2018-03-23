const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const parentlogin = new Schema({

    loginName:{
        type:String,
        require:[true,'Login Name required']
    },
    password:{
        type:String,
        require:[true,'Password required']
    }
});
 const parentloginModel = mongoose.model('parentLogin',parentlogin);
 module.exports = parentloginModel;