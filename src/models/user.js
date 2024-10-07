const mongoose = require('mongoose');

//SchemaType options for validation
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        lowercase: true,
        trim: true,
        validate(value) { // only called when a new document is being created not when updating we need to use runValidators: true
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender data is invalid");
            }
        },
    },
    photoURL: {
        type: String
    },
    about: {
        type: String
    },
    skills: {
        type: [String]
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;