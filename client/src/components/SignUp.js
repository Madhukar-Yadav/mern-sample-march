import React, { Component } from 'react';
// import axios from 'axios';
// import Request from 'superagent';

import Box  from 'grommet/components/Box';
import Form  from 'grommet/components/Form';
import FormFields  from 'grommet/components/FormFields';
import FormField  from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading'; 
import TextInput from 'grommet/components/TextInput'; 
import PasswordInput from 'grommet/components/PasswordInput'; 
import Select from 'grommet/components/Select'; 
import Button from 'grommet/components/Button';
import RadioButton from 'grommet/components/RadioButton';

var MaleChecked = true;
var FemaleChecked = false;

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',password: '',gender: 'male', country: ''
      };
    this._onRadioChange = this._onRadioChange.bind(this);
    this._onCountryChange = this._onCountryChange.bind(this);
    this._onSignUpSubmit = this._onSignUpSubmit.bind(this);
  }
    
  _onRadioChange(event) {
    var raditem = event.target.name;
    if(raditem === 'Male'){
      if(event.target.checked){
        MaleChecked = event.target.checked;
        FemaleChecked = false;
        this.setState({gender: 'Male'})
      }
      else{
        MaleChecked = false;
        FemaleChecked = true;
        this.setState({gender: 'Female'})
      }
    }
    else{
      if(event.target.checked){
        MaleChecked = false;
        FemaleChecked = event.target.checked;
        this.setState({gender: 'Female'})
      }
      else{
        MaleChecked = true;
        FemaleChecked = false;
        this.setState({gender: 'Male'})
      }
    }      
  }

  _onCountryChange(e){
    this.setState({country: e.value});
  }

  _onSignUpSubmit() {
    console.log(this.state);
    // const { username, password, gender, country } = this.state;
    var url = '/api/users/post';

    fetch(url, { 
            method: 'POST',
            headers : { 
              'Content-Type': 'application/json'
             },
            body: JSON.stringify( this.state )
         })
         .then( (res) => res.json() )
         .then( (data) => { 
                            alert( JSON.stringify( data ) ) 
                            console.log(data)
                          } )
         .catch(function(err){
              console.log(err)
              alert(err);
            })   

        this.props.history.push('/ProfilePage');
  }

  render() {

    var style={width: '100%'}

    return (
        <Box margin='none' pad='small' >
          <Heading tag='h3' margin='small'>Sign Up Page</Heading>
          <Form compact={true} onSubmit={this._onSignUpSubmit}>
            <Box margin='none' pad={{between: 'small' }}>            
              <FormField>
                <Box direction='row' margin='none' pad='small' justify='between'>
                  <Heading tag='h4' strong={true} margin='none'>Username</Heading>
                  <TextInput name='Username' onDOMChange={ (e) => this.setState({username: e.target.value}) } />
                </Box>
              </FormField> 
              <FormField >
                <Box direction='row' margin='none' pad='small' justify='between'>
                  <Heading tag='h4' strong={true} margin='none'>Password</Heading>
                  <PasswordInput name='Password' onChange={ (e) => this.setState({password: e.target.value}) } />
                </Box>
              </FormField>
              <FormField >
                <Box direction='row' margin='none' pad={{between: 'small' }} style={{padding: '12px'}} >
                  <Heading tag='h4' strong={true} margin='none'>Gender</Heading>                
                  <RadioButton id='Male'
                    name='Male'
                    label='Male'
                    checked={MaleChecked}
                    onChange={this._onRadioChange} />
                  <RadioButton id='Female'
                    name='Female'
                    label='Female'
                    checked={FemaleChecked}
                    onChange={this._onRadioChange} />
                </Box>
              </FormField>
              <FormField >
                <Box direction='row' margin='none' pad='small' justify='between'>
                  <Heading tag='h4' strong={true} margin='none'>Country</Heading>
                  <Select placeHolder='None' name='country'
                      options={['Australia', 'China', 'Denmark', 'India', 'Indonesia', 'Kenya', 'London', 'Turkey']}
                      value={this.state.country}
                      onChange={this._onCountryChange} />
                </Box>
              </FormField>
              <Box direction='row' style={style} justify='between' margin='none' pad='none'>
                  <Button primary={true} label='Sign Up' onClick={this._onSignUpSubmit} />
              </Box>
            </Box>     
          </Form>
      </Box>
    );
  }
}

export default SignUp;
