import React from 'react';
import logo from '../login/img2.jpg';
import { AccountCircle, Lock } from '@material-ui/icons';
import { Grid, TextField, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import Navbar from "../../navbar/navbar";
  
  class loginforOwner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
      const {email, password } = this.state;
  
      axios
        .post(`http://localhost:5000/loginowner`, {
          email, password
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.success === 'login sucessfull') {
            localStorage.setItem('usertoken', response.data.token);
            console.log('DONE');
            this.props.history.push('/ownerPage')
          }
          else{
            console.log(response.data);
          }
         
        })
        .catch((error) => {
          console.log('login error', error);
          alert('login error');
        });
      event.preventDefault();
    }
  render() {
  return (
    <div>
      <Navbar/>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img
            src={logo}
            style={{
              width: '80%',
              height: '80%',
              objectFit: 'cover',
              margin: '30px',
            }}
            alt='brand'
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          direction='column'
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
            <Grid container>
              <h1>LOGIN</h1>
            </Grid>
            <TextField
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
              label='Username'
              margin='normal'
              InputProps={{
                startAdornment:
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                
              }}
            />

            <TextField
             name='password'
             value={this.state.password}
             onChange={this.handleChange}
             type= "password"
             label='password' margin='normal' InputProps={{startAdornment: 
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                
              }}
            />
            <div style={{ height: 20 }} />
            {/* <Link href='/custumerPage' onClick={console.log('kk')}> */}
              <Button variant='contained' color='primary' onClick = {this.handleSubmit}>
               LOGIN
              </Button>
            {/* </Link> */}
            <div style={{ height: 20 }} />

            <Link href='/signupCustomer' onClick={console.log('kk')}>
              <Button variant='contained' color='primary'>
                register 
              </Button>
            </Link>
            
            <br />
            <br />
            {/* <Link href='/signupOwner' >
              <Button variant='contained' color='primary'>
                register as owner
              </Button>
            </Link> */}

            <Button>register with google</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}
}
export default  loginforOwner;