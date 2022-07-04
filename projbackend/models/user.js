const { createHmac } = await import('node:crypto');
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
    encry_password:{ 
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

userSchema.method = {
    securePassoword: function(plainpassword){
        if (!plainpassword) return '';
        try {
            const hash = createHmac('sha256', this.salt)
                    .update(plainpassword)
                    .digest('hex');
            return hash;
        } catch (error) {
            return "";
        }
        
    }
}



module.exports = mongoose.model('User', userSchema);