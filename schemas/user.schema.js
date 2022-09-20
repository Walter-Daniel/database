const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VALID_ROLES = [
    'ADMIN_ROLE',
    'USER_ROLE',
];

const UserSchema = new Schema({
    fullName: { 
        type: String, 
        require: true, 
        minlength: 5, 
        maxlength: 40 
    },
    email: { 
        type: String, 
        require: true,
        unique: true,
        uniqueCaseInsensitive: true,
        index: true, 
    },
    password: { 
        type: String, 
        require: true
    },
    active: {
        type: Boolean,
        require: true,
        default: false
    },
    role: {
        type: String,
        enum: VALID_ROLES,
        default: VALID_ROLES[1]
    }
});

module.exports = mongoose.model('User', UserSchema)