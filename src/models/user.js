const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    lastName:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user",
        required: false
    },
    contactNumber:{
        type:String,
        required:false
    },
    profilePicture:{
        type:String,
        required:false

    },
},{timestamps:true});   

userSchema.virtual('password')
.set(function(password) {
    this. hash_password = bcrypt.hashSync(password,10);
});


userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
})
userSchema.methods = {
    authenticate: async function (password) {
    return await bcrypt.compareSync(password, this.hash_password);
    },
};

module.exports = mongoose.model("User",userSchema); 