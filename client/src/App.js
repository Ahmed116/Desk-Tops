// import { useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
//import Abotamem from '../src/components/login/login';
import Login from './components/login/login';
import LoginOwner from './components/loginForOwner/loginForOwner';
import SignupOwner from './components/signupOwner/signupOwner';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinCustomer from './components/signupCustomer/signupCustomer';
import CustumerPage from '../src/components/custumerPage/custumerPage';
import OwnerPage from '../src/components/ownerPage/ownerPage';
// import RentPage from '../src/components/rentPage/rentPage';
import LandingPage from '../src/components/landingPage/landingPage';
import Booking from '../src/components/bookingoffice/bookingoffice.js';
import Add from '../src/components/addOffice/addOffice';
import Bookinguser from '../src/components/bookinguser/bookinguser.js';
// import Calender from '../src/components/calender/calender'
import ContactPage from '../src/components/contactus/contactus';
import cal from '../src/components/calender/calender';
// import Ma from '../src/components/map/map'
function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <section>
        <Route exact path='/signupCustomer' component={SinCustomer} />
        <Route exact path='/signupOwner' component={SignupOwner} />
        <Route exact path='/landingPage' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/loginForOwner' component={LoginOwner} />
        <Route exact path='/ownerPage' component={OwnerPage} />
        <Route exact path='/custumerPage' component={CustumerPage} />
        <Route exact path='/addOffice' component={Add} />
        <Route exact path='/bookingoffice' component={Booking} />
        <Route exact path='/Bookinguser' component={Bookinguser} />
        <Route exact path='/cal' component={cal} />
        <Route exact path='/ContactPage' component={ContactPage} />
        {/* <Route exact path='/map' component={Ma} /> */}
      </section>
    </Router>
  );
}

export default App;
