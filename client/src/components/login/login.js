import React from 'react';
import axios from 'axios';
import logo from '../login/img2.jpeg';
import { AccountCircle, Lock } from '@material-ui/icons';
import { Grid, TextField, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import './login.css';

var uesr = {};
class Login extends React.Component { 
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
    const { email, password } = this.state;

    axios
      .post(`http://localhost:5000/loginuser`, {
        email, password
      })
      .then((response) => {
        console.log(response.data.success);
        if (response.data.success === 'login sucessfull') {
          console.log('DONE');
          localStorage.setItem('usertoken', response.data.token);
          this.props.history.push('/custumerPage')
        }
        else {
          alert('ERROR');
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
        <br/><br/>
        <Grid container className="test" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={6}>
            <img
              src={logo}
              style={{
                width: '100%',
                height: '80%',
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
                marginBottom: '200px',
              }}
            >
              <Grid container >
                <h1>LOGIN CUSTOMER</h1>
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
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                label='password' margin='normal' InputProps={{
                  startAdornment:
                    <InputAdornment position='start'>
                      <Lock />
                    </InputAdornment>
                }}
              />
              <div style={{ height: 20 }} />
              <Button variant='contained' style={{ backgroundColor: '#00848C' }} color='primary' onClick={this.handleSubmit}>
                LOGIN
              </Button>
              <div style={{ height: 20 }} />
              <Link href='/signupCustomer' onClick={console.log('kk')}>
                <Button variant='contained' style={{ backgroundColor: '#00848C',width: '350px'}} color='primary' className="btn">
                  register
              </Button>
              </Link>
              <br />

              <Button variant='contained' style={{ backgroundColor: '#00848C' }} color='primary' className="btn">
                Register With Google
            </Button>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Login;
