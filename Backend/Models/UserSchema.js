const mongoose=require('mongoose');

var bcrypt = require('bcryptjs');
//const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
   
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
})



userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
       
    }
    next();

});


const UserTest=mongoose.model('USERTest',userSchema);

module.exports=UserTest;