import React, { useState, useEffect } from 'react';
// import '../landingPage/assets/img/portfolio'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import store from '../.././reducers/store';
import Add from '../addOffice/addOffice';
import { initalize } from './../../actions';
import $ from 'jquery';
import '../landingPage/index.css';

import {
  ClickAwayListener,
  Button,
  open,
  Portal,
  classes,
  makeStyles,
} from '@material-ui/core';
import { TimerSharp } from '@material-ui/icons';
var email = '';
const useStyles = makeStyles((theme) => ({
  dropdown: {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  img1: {
    backgroundSize: 'cover',
  },
}));
function Home(props) {
  const [data, setData] = useState([]);
  const [navbar, setNavbar] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = useState([]);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClick3 = (e) => {
    setLocation(e.target.value);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/getall');
      console.log(result.data.success, 'hhhhhhhhhhhhhhhhhhh');
      setData(result.data.success);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const tokin = localStorage.usertoken;
    if (tokin) {
      var decoded = jwt_decode(tokin);
      console.log(decoded);
      email = decoded.email;
      console.log(email);
    } else {
      console.log('no token found');
    }
  });
  useEffect(() => {
    store.dispatch(initalize());
    // console.log(store.getState().counter, 'storeeeeee');
    $({ counter: 0 }).animate(
      { counter: store.getState().counter - 1 },
      {
        //Animate over a period of 2seconds
        duration: 3000,
        //Progress animation at constant pace using linear
        easing: 'linear',
        step: function () {
          //Every step of the animation, update the number value
          //Use ceil to round up to the nearest whole int
          $('.total').text(Math.ceil(this.counter));
        },
        complete: function () {
          //Could add in some extra animations, like a bounc of colour change once the count up is complete.
        },
      }
    );
  });

  return (
    <div>
      <div>
        <nav
          class='navbar navbar-expand-lg navbar-light fixed-top py-3'
          id='mainNav'
        >
          <div class='container'>
            <a class='navbar-brand js-scroll-trigger' href='/landingPage'>
              {' '}
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
                  <a class='nav-link js-scroll-trigger' href='/loginForOwner'>
                    LogIn As Owner
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='/login'>
                    LogIn As Customer
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
      {/* <!-- Masthead--> */}
      <header class='masthead'>
        <div class='container h-100'>
          <div class='row h-100 align-items-center justify-content-center text-center'>
            <div class='col-lg-10 align-self-end'>
              <h2 class='text-uppercase text-white font-weight-bold'>
                Whatever your business, whatever your budget we’ll help find the
                right workspace.
              </h2>
              <h1 style={{ color: '#00848C' }}> _____ </h1>
              <br />
            </div>
            <div class='col-lg-8 align-self-baseline'>
              <div id='box'>
                <span
                  class='total'
                  style={{ fontSize: '60px', color: 'white' }}
                ></span>

                <h3 style={{ color: 'white' }}>OFFICES RADY FOR RENT</h3>
              </div>
              <br />
              <a
                class='btn btn-primary btn-xl js-scroll-trigger'
                style={{ marginRight: '10px', backgroundColor: '#00848C' }}
                href='/signupOwner'
              >
                Register As Owner
              </a>
              <a
                class='btn btn-primary btn-xl js-scroll-trigger'
                style={{ backgroundColor: '#00848C' }}
                href='/signupCustomer'
              >
                Register As Customer
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Services--> */}
      <section class='page-section' id='services'>
        <div class='container'>
          <h2 class='text-center mt-0'>At Your Service</h2>
          <h1 style={{ color: '#00848C', textAlign: 'center' }}> _____ </h1>
          <br />
          <div class='row'>
            <div class='col-lg-3 col-md-6 text-center'>
              <div class='mt-5'>
                <img
                  class='xxx'
                  src='https://image.flaticon.com/icons/svg/546/546423.svg'
                  alt=''
                />
                <i class='fas fa-4x fa-gem text-primary mb-4'></i>
                <h3 class='h4 mb-2'>All-inclusive pricing</h3>
                <p class='text-muted mb-0'>
                  Pay one simple price for everything related to your workspace.
                </p>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 text-center'>
              <div class='mt-5'>
                <img
                  class='xxx'
                  src='https://image.flaticon.com/icons/svg/2271/2271406.svg'
                  alt=''
                />
                <i class='fas fa-4x fa-laptop-code text-primary mb-4'></i>
                <br />
                <h3 class='h4 mb-2'>Furnished offices</h3>
                <p class='text-muted mb-0'>
                  Modern furniture and high-speed internet included.
                </p>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 text-center'>
              <div class='mt-5'>
                <img
                  class='xxx'
                  src='https://image.flaticon.com/icons/svg/2278/2278994.svg'
                  alt=''
                />
                <i class='fas fa-4x fa-globe text-primary mb-4'></i>
                <h3 class='h4 mb-2'>Temporary offices</h3>
                <p class='text-muted mb-0'>
                  Set up as a project office and cancel your plan at a month’s
                  notice.
                </p>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 text-center'>
              <div class='mt-5'>
                <img
                  class='xxx'
                  src='https://image.flaticon.com/icons/svg/813/813802.svg'
                  alt=''
                />
                <i class='fas fa-4x fa-heart text-primary mb-4'></i>
                <h3 class='h4 mb-2'>Increase the size</h3>
                <p class='text-muted mb-0'>
                  Add more desk space as you take on new staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio--> */}
      <div id='portfolio'>
        <div class='container-fluid p-0'>
          <div class='row no-gutters'>
            <div class='col-lg-4 col-sm-6'>
              <a class='portfolio-box' href='login'>
                <img
                  class='img-fluid'
                  src='https://images.pexels.com/photos/265125/pexels-photo-265125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  alt=''
                />
                <div class='portfolio-box-caption'>
                  <div class='project-category text-white-50'>WASFSs</div>
                  <div class='project-name'>Rent Now</div>
                </div>
              </a>
            </div>
            <div class='col-lg-4 col-sm-6'>
              <a class='portfolio-box' href='/login'>
                <img
                  class='img-fluid'
                  src='https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  alt=''
                />
                <div class='portfolio-box-caption'>
                  <div class='project-category text-white-50'>BDX</div>
                  <div class='project-name'>Rent Now </div>
                </div>
              </a>
            </div>
            <div class='col-lg-4 col-sm-6'>
              <a class='portfolio-box' href='/login'>
                <img
                  class='img-fluid'
                  src='https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  alt=''
                />
                <div class='portfolio-box-caption'>
                  <div class='project-category text-white-50'>ASD</div>
                  <div class='project-name'>Rent Now </div>
                </div>
              </a>
            </div>
            <div class='col-lg-4 col-sm-6'>
              <a class='portfolio-box' href='/login'>
                <img
                  class='img-fluid'
                  src='https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  alt=''
                />
                <div class='portfolio-box-caption'>
                  <div class='project-category text-white-50'>ATTM</div>
                  <div class='project-name'>Rent Now </div>
                </div>
              </a>
            </div>
            <div class='col-lg-4 col-sm-6'>
              <a class='portfolio-box' href='/login'>
                <img
                  class='img-fluid'
                  src='https://images.pexels.com/photos/265101/pexels-photo-265101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
                <div class='portfolio-box-caption'>
                  <div class='project-category text-white-50'>ATKH</div>
                  <div class='project-name'>Rent Now </div>
                </div>
              </a>
            </div>
            <div class='col-lg-4 col-sm-6'>
              <a class='portfolio-box' href='/login'>
                <img
                  class='img-fluid'
                  src='https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  alt=''
                />
                <div class='portfolio-box-caption p-3'>
                  <div class='project-category text-white-50'>HTW</div>
                  <div class='project-name'>Rent Now </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact--> */}
      <section class='page-section' id='contact'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-lg-8 text-center' href='/contactPage'>
              <h2 class='mt-0'>Let's Get In Touch!</h2>
              <hr class='divider my-4' />
              <h5 class='text-muted mb-5'>
                Pay one price for a fully-furnished office, including furniture,
                WiFi, phones, utility bills and a staffed reception.!
              </h5>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-4 ml-auto text-center mb-5 mb-lg-0'>
              <i class='fas fa-phone fa-3x mb-3 text-muted'></i>
              <div class='d-block' style={{ color: '#00848C' }}>
                phone : +972 59-289-641-0
              </div>
            </div>
            <div class='col-lg-4 mr-auto text-center'>
              <i class='fas fa-envelope fa-3x mb-3 text-muted'></i>
              {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
              <a class='d-block' href='bookingfinder5by5team@gmail.com'>
                Email : bookingfinder5by5team@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer class='bg-light py-5'>
        <div class='container'>
          <div class='small text-center text-muted'>
            Copyright © 2020 - Desk Tops
          </div>
        </div>
      </footer>
    </div>
  );
}
const mapStateToProps = (state) => {
  const counter = state.counter;
  return {
    counter: state.counter,
  };
};
export default connect(mapStateToProps, { initalize })(Home);
