const { string } = require('i/lib/util');
const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        maxlength:32,
        trim:true
    },
    lastName: {
        type: String,
        required: false,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim:true
    },
    //TODO: 
    password:{ 
        type: String,
        required: true
    },
    salt: String,
    role: {
        type: Namber,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('User', userSchema);