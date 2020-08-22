import React from 'react';
import axios from 'axios';
import logo from '../login/img2.jpeg';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AccountCircle, Lock, Email, Phone } from '@material-ui/icons';
import './singupcus.css';
import logo33 from '../login/img3.jpeg';



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
      <div >
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" style={{backgroundColor:'#00848C'}} id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="/landingPage">Desk Tops</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/loginForOwner">LogIn As Owner</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/login">LogIn As Customer</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/contactPage">Let's Talk</a></li>
                    </ul>
                </div>
            </div>
        </nav></div>
        <br/><br/><br/>
      <Grid container className="test" >
      <Grid item xs={12} sm={6}>
            <img
              src={logo33}
              style={{
                width: '95%',
                height: '75%',
                backgroundSize: 'cover',
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
              marginBottom: '200px'
            }} 
          >
             <Grid container >
                <h1>Sing Up Customer</h1>
              </Grid>
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
            <Button color='primary' style={{ backgroundColor: '#00848C' }} variant='contained' onClick= {this.handleSubmit}>
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