const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const adminlogin = new Schema({

    loginName:{
        type:String,
        require:[true,'Login Name required']
    },
    password:{
        type:String,
        require:[true,'Password required']
    }
});
 const adminLoginModel = mongoose.model('adminlogin',adminlogin);
 module.exports = adminLoginModel;