var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var Users = require('./model/userModel');

var app = express();

app.get('/users', (req, res) => {
    res.json(Users);
})

app.get('/users/:id', (req, res) => {
    var _id = req.params.id;
    var list = Users;
    var user = {};
    _.each(Users, (val, index) => {
        if(val.id === _id){
            user = val;
        }                 
    })
    if(user.id !== undefined){            
        console.log(_id+" and val is "+user.id);
            response = 'User with id: '+_id+" is found";
        }else{
            response = 'User not found';    
    }
    res.json( {message: response, Users: user});
})

app.post('/users', (req, res) => {
    var user = { 
        id: req.body.id, 
        username: req.body.username, 
        password: req.body.password, 
        gender: req.body.gender, 
        country: req.body. country
    };
    Users.push(user);
    res.json( {message:"User Added", User: user });
})

// var Router = express.Router();

// Router.route('/users')
// .get((req, res) => {
//     console.log(Users);
//     res.json( {message:"List of Users", UsersList: Users });
// })
// .post((req, res) => {
//     var user = { 
//         id: req.body.id, 
//         username: req.body.username, 
//         password: req.body.password, 
//         gender: req.body.gender, 
//         country: req.body. country
//     };
//     Users.push(user);
//     res.json( {message:"User Added", User: user });
// })

// app.use(bodyParser.json());
// app.use('/',Router);

var Port = 3456;
app.listen(Port, function(){
    console.log('Server is running at port: '+Port);
});