import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../navbar/navbar';
import CardActions from '@material-ui/core/CardActions';
import Rating from 'material-ui-rating';
import './booking.css';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
var email = '';
var booking_id = 0;
var emailowner = '';

var ratingnumber = 0;
var valueofstart = 0;
var office_id = 0;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));
export default function Bookinguser() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [star, setStar] = useState(0);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handlestar = () => {
    setStar(star);
  };
  useEffect(() => {
    const tokin = localStorage.usertoken;
    var decoded = jwt_decode(tokin);
    console.log(decoded);
    email = decoded.email;
    console.log(email);
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post('http://localhost:5000/getbookinguser', {
        email,
      });
      console.log(result.data);
      setData(result.data.success);
    };

    fetchData();
  }, []);
  return (
    <div>
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
                  <a class='nav-link js-scroll-trigger' href='/custumerPage'>
                    Offices
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

        <boot.Row className='rowBook'>
          {data.map((element, index) => {
            return (
              <boot.Card
                className='card'
                key={index}
                style={{ width: '18rem' }}
              >
                <boot.Card.Title className='email' style={{ color: '#00848C' }}>
                  {' '}
                  My Rents{' '}
                </boot.Card.Title>

                <boot.Card.Body>
                  <boot.Card.Title>
                    <label>Email : {element.emailowner}</label>
                  </boot.Card.Title>
                  <boot.Card.Title>
                    <label>
                      start date :{' '}
                      {moment(element.startdate).format('YYYY-MM-DD')}
                    </label>{' '}
                  </boot.Card.Title>
                  <boot.Card.Title>
                    <label>
                      End date : {moment(element.enddate).format('YYYY-MM-DD')}
                    </label>
                  </boot.Card.Title>

                  <Button
                    variant='primary'
                    style={{ marginLeft: '40px' }}
                    onClick={() => {
                      booking_id = element.booking_id;
                      emailowner = element.emailowner;
                      const booking = {
                        booking_id,
                        emailowner,
                        email,
                      };

                      axios
                        .post('http://localhost:5000/deletebooking', booking)
                        .then((res) => {
                          console.log(res);
                          window.location.reload(true);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    DELETE
                  </Button>
                  <boot.Button
                    variant='primary'
                    onClick={() => {
                      office_id = element.office_id;
                      console.log(element);
                      handleShow2();
                    }}
                  >
                    Rating
                  </boot.Button>
                  <boot.Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop='static'
                    keyboard={false}
                  >
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          image='/static/images/cards/contemplative-reptile.jpg'
                          title='Contemplative Reptile'
                        />
                        <CardContent>
                          <div className={classes.root}>
                            <Rating
                              name='size-medium'
                              defaultValue={0.5}
                              precision={0.5}
                              value={star}
                              onChange={(value) => {
                                console.log(`Rated with value ${value}`);
                                valueofstart = value;
                              }}
                            />
                          </div>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          variant='secondary'
                          onClick={() => {
                            console.log(valueofstart);
                            const rating = {
                              id: element.office_id,
                              rating: valueofstart,
                            };
                            axios
                              .post('http://localhost:5000/rating', rating)
                              .then((res) => {
                                console.log(res.data);
                                // window.location.reload(true);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                            //window.location.reload(true);
                            handleClose2();
                          }}
                        >
                          OK
                        </Button>
                      </CardActions>
                    </Card>
                  </boot.Modal>
                </boot.Card.Body>
              </boot.Card>
            );
          })}
        </boot.Row>
      </div>
    </div>
  );
}
