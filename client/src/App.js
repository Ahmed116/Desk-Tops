import React from 'react';
//import Abotamem from '../src/components/login/login';
import Login from './components/login/login';
import LoginOwner from './components/loginForOwner/loginForOwner'
import SignupOwner from './components/signupOwner/signupOwner';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinCustomer from './components/signupCustomer/signupCustomer';
import CustumerPage from '../src/components/custumerPage/custumerPage'
import OwnerPage from '../src/components/ownerPage/ownerPage'
import RentPage from '../src/components/rentPage/rentPage'
import LandingPage from '../src/components/landingPage/landingPage';

import Add from '../src/components/addOffice/addOffice'

// import Calender from '../src/components/calender/calender'
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
        <Route exact path='/rentPage' component={RentPage} />
      </section>
    </Router>
  );
}

export default App;
