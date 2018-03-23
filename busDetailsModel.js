const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const busDetails = new Schema({

    busNumber:{
        type:String,
        require:[true,'Bus Number required']
    },
    driverName:{
        type:String,
        require:[true,'Driver Name required']
    },
    phoneNumber:{
        type:String,
        require:[true,'Phone Number required']
    },
    latitude :{
        type:String
    },
    longitude:{
        type:String
    }
});
 const busDetailsModel = mongoose.model('busDetails',busDetails);
 module.exports = busDetailsModel;