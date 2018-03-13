import React, { Component } from 'react';
import './customers.css';

import Box  from 'grommet/components/Box';
import Button  from 'grommet/components/Button';
import Layer  from 'grommet/components/Layer';
import Trash  from 'grommet/components/icons/base/Trash';

class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      userinfo: '',
      delItemLayer: false
    };  
    this.closeDelPopup = this.closeDelPopup.bind(this);
    this.delIconClick = this.delIconClick.bind(this);    
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({userinfo: users}, () => console.log('users fetched...', users)));
  }
  
  closeDelPopup(){
    this.setState({delItemLayer : false});
  }

  delIconClick(){    
    this.setState({delItemLayer : true});
  }

  deleteItem(){    
    this.setState({delItemLayer : false});
  }

  render() {
    var showPopUp = '';
    { this.state.delItemLayer ? 
      showPopUp =  <Layer closer={true} onClose={ this.closeDelPopup } >
            <Box margin='none' pad='small' justify='between' >
              <p>Confirmation</p>
              <p>Are you sure, you want to delete the selected Item ?</p>
              <Box direction='row' margin='none' pad={{between:'small'}} align='end' >
                <Button label='Yes' primary={true} onClick={ this.deleteItem } />
                <Button label='No' critical={true} onClick={ this.closeDelPopup } />
              </Box>
            </Box>
        </Layer>
      : showPopUp = '' }

    var data = this.state.userinfo;
    var listitems = Object.keys(data).map( (users, index) => {
                      return (
                      <Box key={index} direction='row'>
                        <li key={data[index]._id}>{data[index].username} -> {data[index].password} -> {data[index].gender} -> {data[index].country} </li>)
                        <Box  onClick={this.delIconClick} >
                          <Trash size='small' />
                        </Box>
                      </Box>
                      )
                    }
                    )
                    
  return (
      <Box>
        <h2>Profile Page</h2>
        <ul>
        {listitems}
        {showPopUp}
        </ul>
      </Box>
    );
  }
}

export default ProfilePage;
