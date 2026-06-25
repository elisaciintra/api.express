const mongoose = require('mongoose');

// Define como os dados serão salvos no banco.

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true }
}, { timestamps: true});

module.exports = mongoose.model('User', userSchema); 

