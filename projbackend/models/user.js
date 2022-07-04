const mongoose = require ('mongoose');
const crypto = require ('crypto');
const uuidv1 = require ('uuid/v1')

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

userSchema.virtual("password")
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassoword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.method = {
    Authenticate:function (plainpassword) {
        return this.securePassoword(plainpassword) === this.encry_password;
    },
    securePassoword: function(plainpassword){
        if (!plainpassword) return '';
        try {
            const hash = crypto.createHmac('sha256', this.salt)
                    .update(plainpassword)
                    .digest('hex');
            return hash;
        } catch (error) {
            return "";
        }
        
    }
}



module.exports = mongoose.model('User', userSchema);