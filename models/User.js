var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

// Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

// Get User
module.exports.getUserDetails = function(username, password, callback){
    var query = {
                    username : username,
                    password : password
                };
    User.findOne(query, callback);
    // User.findById(id, callback);
}

// Add User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

// Update User
module.exports.updateUser = function(id, user, options, callback){
    var query = {_id : id};
    var update = {
        username: user.username,
        password: user.password,
        gender: user.gender,
        country: user.country
    };
    User.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.deleteUserById = function(id, callback){
    User.findOneAndRemove(id, callback);
}