const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

User = require('./modals/User');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/myUsers');
var db = mongoose.connection;
   
app.get('/api/users', (req, res) => {
    User.getUsers(function(err, users){
      if(err){
        throw err;
      }
      res.json(users);
    });
});

app.get('/api/users/:username/:password', (req, res) => {
  var username = req.params.username;
  var password = req.params.password;
  User.getUserDetails(username, password, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
});

app.post('/api/users/post', (req, res) => {
  var user = req.body;
  User.addUser(user, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
});

app.put('/api/users/:_id/update', (req, res) => {
  var id = req.params._id;
  var user = req.body;
  User.updateUser(id, user, {}, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
});

app.delete('/api/users/:_id/delete', (req, res) => {
  User.findOneAndRemove(req.params._id, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
});

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];
//   res.json(customers);
// });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);