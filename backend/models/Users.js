const mongoose = require('mongoose');

const UserSchemea = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const UserModel = mongoose.model('User', UserSchemea);
module.exports = UserModel;