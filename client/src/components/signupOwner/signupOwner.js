import React from 'react';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField } from '@material-ui/core';
import {
  AccountCircle,
  Lock,
  Email,
  Phone,
  LocationOn,
  Business,
} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Navbar from '../../navbar/navbar';
import './signupow.css'
import logo from '../login/img2.jpeg';
import logo33 from '../login/img3.jpeg';



class SignupOwner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      companyname: '',
      email: '',
      password: '',
      location: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    const { name, phone, companyname, email, password, location } = this.state;

    axios
      .post(`http://localhost:5000/registerowner`, {
        name,
        phone,
        companyname,
        email,
        password,
        location,
      })
      .then(response => {
        console.log(response);
        if (response.data.success === 'user registered sucessfully') {
          console.log('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.history.push('/loginForOwner');
          alert('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
        } else {
          alert('ERROR');
        }
      })
      .catch(error => {
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
        <br/><br/>
        <Grid container style={{ minHeight: '100vh'}} >
          <Grid item xs={12} sm={6}>
            <img
              src={logo33}
              style={{
                width: '100%',
                height: '100%',
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
                <h1>Sing Up Owner</h1>
              </Grid>
              <TextField
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                label='OwnerName'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <AccountCircle />{' '}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name='phone'
                value={this.state.phone}
                onChange={this.handleChange}
                label='Phone'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <Phone />{' '}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name='companyname'
                value={this.state.companyname}
                onChange={this.handleChange}
                label='CompanyName'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <Business />{' '}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                label='Email'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <Email />{' '}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                label='Password'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <Lock />{' '}
                    </InputAdornment>
                  ),
                }}
              />

              {/* <FormControl className={classes.formControl}> */}
              <InputLabel id='demo-simple-select-label'>Location</InputLabel>
              <Select
                name='location'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={this.state.location}
                onChange={this.handleChange}
              >
                <InputAdornment position='start'>
                  {' '}
                  <LocationOn />
                </InputAdornment>
                <MenuItem value={'Gaza'}>Gaza</MenuItem>
                <MenuItem value={'KhanYounes'}>KhanYounes</MenuItem>
                <MenuItem value={'Rafah'}>Rafah</MenuItem>
                <MenuItem value={'Dair AlBalah'}>Dair AlBalah</MenuItem>
                <MenuItem value={'Beit Lahia'}>Beit Lahia</MenuItem>
                <MenuItem value={'Jabalia'}>Jabalia</MenuItem>
              </Select>
              {/* </FormControl> */}
              <div style={{ hight: 20 }} />
              <Button
              style={{ backgroundColor: '#00848C' }}
                color='primary'
                variant='contained'
                onClick={this.handleSubmit}
              >
                Done
              </Button>
              <div style={{ height: 20 }} />
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default SignupOwner;