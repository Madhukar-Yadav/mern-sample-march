import React, { Component } from 'react';
// import axios from 'axios';
// import Request from 'superagent';
// import 'whatwg-fetch';

import Box  from 'grommet/components/Box';
import Heading  from 'grommet/components/Heading';
import Form  from 'grommet/components/Form';
import FormField  from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput'; 
import PasswordInput from 'grommet/components/PasswordInput'; 
import Button from 'grommet/components/Button';

let username = '';
let password = '';
let UserInfo = {};

class Login extends Component {
  constructor() {
    super();
    this._onLoginSubmit = this._onLoginSubmit.bind(this);
    this.check = this.check.bind(this);
  }

  check(){

    var url = '/api/users/'+username+'/'+password;
    fetch(url)
    .then( (res) => res.json() )
    .then( (data) => {
      console.log(data)
      this.props.history.push('/ProfilePage')
    })
    .catch( (err) => {
        alert(err);
    }); 
  }
  
  _onLoginSubmit() { 
    
    console.log(username+' => '+password);
    console.log(UserInfo);
        var url = '/api/users/'+username+'/'+password;
        if(username === '' || password === ''){
          alert('Username and Password fields are mandatory.');
        }
        else{
        fetch(url)
            .then( (res) => res.json() )
            .then( (data) => {
              if(data.username === username && data.password === password){
                console.log(data)
                this.props.history.push('/ProfilePage')
              }
              else{
                alert(`Please enter a valid Username and Password.
                      Note: ( Username and Password are Case Sensitive )`);
              }
            })
            .catch( (err) => {
                // alert(err);
                alert(`Please enter a valid Username and Password.
                      Note: ( Username and Password are Case Sensitive )`);
            });
        // Request.get(url)
        //     .then( (res) => {    
        //       UserInfo = res.body;
        //     }); 
        //     if( UserInfo === null ){
        //       alert('Please enter a valid Username annd Password.');
        //     }else if( UserInfo.username === username ){
        //       this.props.history.push('/ProfilePage')
        //     }       
        }                   
  }

  render() {
    var style={width: '100%'}
    return (
      <Box margin='none' pad='small' >
        <Heading tag='h3' margin='small'>Login Page</Heading>
        <Form compact={true}>
           <Box margin='none' pad={{between: 'small' }}>
            <FormField>
              <Box direction='row' margin='none' pad='small' justify='between'>
                <Heading tag='h4' strong={true} margin='none'>Username</Heading>
                <TextInput name='Username' onDOMChange={ (e) => { username = e.target.value } } />
              </Box>
            </FormField> 
            <FormField >
              <Box direction='row' margin='none' pad='small' justify='between'>
                <Heading tag='h4' strong={true} margin='none'>Password</Heading>
                <PasswordInput name='Password' onChange={ (e) => { password = e.target.value } } />
              </Box>
            </FormField>
            <Box direction='row' style={style} justify='between' margin='none' pad='none'>
                <Button primary={true} label='Sign Up' onClick={ () => {this.props.history.push('/SignUp')} } />
                <Button primary={true} label='Login' onClick={this._onLoginSubmit} /> 
            </Box>        
          </Box>     
        </Form>
      </Box>
    );
  }
}

export default Login;
