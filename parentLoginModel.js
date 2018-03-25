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
 const parentLoginModel = mongoose.model('parentlogin',parentlogin);
 module.exports = parentLoginModel;