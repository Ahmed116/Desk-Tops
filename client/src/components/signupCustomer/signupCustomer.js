import React from 'react';
import axios from 'axios';
// import photo from './photo_2017-11-23_07-26-42.jpg';
// import logo from './201695562016-12-204225943Cooking Table-01.jpg';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AccountCircle, Lock, Email, Phone } from '@material-ui/icons';

  class SinCustomer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // save the information in db
  handleSubmit(event) {
    const { name,email, password ,phone} = this.state;

    axios
      .post(`http://localhost:5000/registeruser`, {
        name,email, password,phone
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === 'user registered sucessfully') {
          console.log('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.history.push('/login')
          alert('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
        }
        else{
          alert('ERROR');
        }
       
      })
      .catch((error) => {
        console.log('registration error', error);
        alert('registration error');
      });
    event.preventDefault();
  }
    render() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        {/* <Grid item xs={12} sm={6}>
          <img
            src={photo}
            style={{ width: '85%', height: '85%', objectFit: 'cover' }}
            alt='brand'
          />
        </Grid> */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          direction='coulumn'
          justify='space-between'
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            {/* <Grid container justify='center'>
              <img src={logo} width={200} alt='logo' />
            </Grid> */}
            <TextField
              isRequired = {true}
             name='name'
             value={this.state.name}
             onChange={this.handleChange}
              label='Username'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
             name='email'
             value={this.state.email}
             onChange={this.handleChange}
              label='Email'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
             name='password'
             type="password"
             value={this.state.password}
             onChange={this.handleChange}
              label='password'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
              label='Phone'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ hight: 20 }} />
            <Button color='primary' variant='contained' onClick= {this.handleSubmit}>
              {' '}
              Done{' '}
            </Button>
            <div style={{ height: 20 }} />
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );}
}
export default SinCustomer;