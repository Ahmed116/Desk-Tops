import React, { useState, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PhotoCamera } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import axios from 'axios';
import Navbar from '../../navbar/navbar';
import './addOff.css';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import allReducer from '../../reducers';
import { createStore, combinReducers } from 'redux';
import store from '../.././reducers/store';
import { increment, decrement } from './../../actions';
//const nodemailer = require('nodemailer');
var imgUrl = '';
var email = '';
var phoneowner = 0;
function AddOffice() {
  useEffect(() => {
    const tokin = localStorage.usertoken;
    var decoded = jwt_decode(tokin);
    console.log(decoded);
    email = decoded.email;
    phoneowner = decoded.phone;
    console.log(email);
  });
  const [add, setadd] = useState({
    Discription: '',
    location: '',
    price: 0,
  });
  const [addch, setaddch] = useState({
    Vip_wifi: false,
    conditioning: false,
    ele: false,
    water: false,
    coffeeandtea: false,
  });

  const handleChange = (event) => {
    setadd({ ...add, [event.target.name]: event.target.value });
  };
  const handleChange2 = (event) => {
    setaddch({ ...addch, [event.target.name]: true });
  };

  const handleSubmit = (e) => {
    store.dispatch(increment());
    e.preventDefault();
    let office = {
      ...add,
      ...addch,
    };
    office['email'] = email;
    office['phoneowner'] = phoneowner;
    office['imgUrl'] = imgUrl;
    office['rating'] = 0.0;
    console.log(office);
    console.log(addch);
    axios
      .post(`http://localhost:5000/addoffice`, office)
      .then(function (response) {
        console.log(response);
        if (response.data === 'error') {
          alert('Somthing Empty');
        } else if (response.data.success === 'added') {
          alert('The Office Added');
          window.location.reload('/addOffice');
        } else {
          alert('ERROR');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [location, setlocation, imageUrl, imageAlt] = useState('');
  const usemYStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = usemYStyles();

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const uploadImage = (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'dbimage');
    setLoading(true);
    axios
      .post('https://api.cloudinary.com/v1_1/dwwkrlpkl/image/upload', data)
      .then((response) => {
        imgUrl = response.data['secure_url'];
        console.log(imgUrl);
        setImage(imgUrl);

        // handleUrlChangeT(imgUrl);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: '45px' }}>
      <div>
        <nav
          class='navbar navbar-expand-lg navbar-light fixed-top py-3'
          style={{ backgroundColor: '#00848C' }}
          id='mainNav'
        >
          <div class='container'>
            <a class='navbar-brand js-scroll-trigger' href='/landingPage'>
              Desk Tops
            </a>
            <button
              class='navbar-toggler navbar-toggler-right'
              type='button'
              data-toggle='collapse'
              data-target='#navbarResponsive'
              aria-controls='navbarResponsive'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarResponsive'>
              <ul class='navbar-nav ml-auto my-2 my-lg-0'>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='/ownerPage'>
                    My Offices
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='/contactPage'>
                    Let's Talk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <br />

      <div className='form'>
        <Grid container style={{ minHeight: '100vh' }}>
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
                marginBottom: '200px',
              }}
            >
              <input
                type='file'
                name='file'
                placeholder='Upload an image'
                onChange={uploadImage}
              />
              <br />
              <TextField
                name='Discription'
                value={add.Discription}
                onChange={handleChange}
                label='Discription'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
              />
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Location</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  name='location'
                  value={add.location}
                  onChange={handleChange}
                >
                  <MenuItem value={'gaza'}>Gaza</MenuItem>
                  <MenuItem value={'KhanYounes'}>KhanYounes</MenuItem>
                  <MenuItem value={'Rafah'}>Rafah</MenuItem>
                  <MenuItem value={'Dair AlBalah'}>Dair AlBalah</MenuItem>
                  <MenuItem value={'Beit Lahia'}>Beit Lahia</MenuItem>
                  <MenuItem value={'Jabalia'}>Jabalia</MenuItem>
                </Select>
                <TextField
                  name='price'
                  type='number'
                  value={add.price}
                  onChange={handleChange}
                  label='price'
                  margin='normal'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'></InputAdornment>
                    ),
                  }}
                />
              </FormControl>{' '}
              <div style={{ hight: 20 }} />
              <h5 style={{ color: '#00848C' }}>Features :</h5>
              <FormControlLabel
                control={
                  <Checkbox
                    name='Vip_wifi'
                    value={add.Vip_wifi}
                    onChange={handleChange2}
                    icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                  />
                }
                label='VIP WIFI'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='conditioning'
                    value={add.conditioning}
                    onChange={handleChange2}
                    icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                  />
                }
                label='conditioning'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='ele'
                    value={add.ele}
                    onChange={handleChange2}
                    icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                  />
                }
                label='24 hours electricity'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='water'
                    value={add.water}
                    onChange={handleChange2}
                    icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                  />
                }
                label='ًWater'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name='coffeeandtea'
                    value={add.coffeeandtea}
                    onChange={handleChange2}
                    icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                    checkedIcon={<CheckBoxIcon fontSize='small' />}
                  />
                }
                label='Coffe AND Tea'
              />
              <div style={{ height: 20 }} />
              <div className={classes.root}>
                <Link href='/ownerPage' onClick={console.log('kk')}>
                  <Button
                    color='primary'
                    variant='contained'
                    onClick={handleSubmit}
                    style={{ backgroundColor: '#00848C' }}
                  >
                    Add One
                  </Button>
                </Link>
              </div>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
      <div className='imgDiv'>
        {imgUrl === '' ? (
          <img
            src='https://www.migefurniture.com/wp-content/uploads/2019/05/3-3.jpg'
            className='img'
          ></img>
        ) : (
          <img src={imgUrl} className='img'></img>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
export default connect(mapStateToProps, { increment, decrement })(AddOffice);
