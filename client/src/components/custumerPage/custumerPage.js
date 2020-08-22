import Navbar from '../../navbar/navbar';
import * as boot from 'react-bootstrap';
import * as moment from 'moment';
import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { DateTime } from 'react-datetime-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link, Box } from '@material-ui/core';
import '../custumerPage/cus.css';
import $ from 'jquery';
import { createBrowserHistory } from 'history';
// import Map from '../map/map';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Rating from 'material-ui-rating';
var item = {};
var email = '';
var phoneuser = 0;
var office_id = 0;
const history = createBrowserHistory();
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));
var valueofstart = 0;

function CustemarPage() {
  const classes = useStyles();
  const [star, setStar] = useState(0);
  const handlestar = () => {
    setStar(star);
  };
  const [selectedDate, setSelectedDate] = useState(new Date('2020-08-18'));
  const [selectedDate2, setSelectedDate2] = useState(new Date('2020-08-18'));
  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [data2, setData2] = useState([]);

  const handlechange = (event) => {
    setLocation(event.target.value);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/getall');
      console.log(result.data.success);
      setData(result.data.success);
    };

    fetchData();
  }, []);
  const search = (event) => {
    axios
      .post(`http://localhost:5000/search`, { location })
      .then((response) => {
        setData2(response.data.success);
      })
      .catch((error) => {
        console.log('error', error);
        alert('Error');
      });
    event.preventDefault();
  };
  useEffect(() => {
    const tokin = localStorage.usertoken;
    var decoded = jwt_decode(tokin);
    console.log(decoded);
    email = decoded.email;
    phoneuser = decoded.phone;
    console.log(email);
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div style={{ marginTop: '45px' }}>
      <div className='aaa'>
        <nav
          class='navbar navbar-expand-lg navbar-light fixed-top py-3'
          style={{ backgroundColor: '#00848C' }}
          id='mainNav'
        >
          <div class='container'>
            <a class='navbar-brand js-scroll-trigger' href='/custumerPage'>
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
                  <a class='nav-link js-scroll-trigger' onClick={search}>
                    LogOut
                  </a>
                </li>

                <li class='nav-item'>
                  <a class='nav-link js-scroll-trigger' href='/contactPage'>
                    Let's Talk
                  </a>
                </li>

                <button Link to='/map'>
                  map
                </button>
              </ul>
            </div>
            <ReactBootstrap.Form.Control
              style={{ width: ' 14%', marginLeft: '10px', marginRight: ' 5px' }}
              as='select'
              defaultValue='Gaza'
              onChange={handlechange}
            >
              <option value='Gaza'>Gaza</option>
              <option value='KhanYounes'>KhanYounes</option>
              <option value='Rafah'>Rafah</option>
              <option value='Dair AlBalah'>Dair AlBalah</option>
              <option value='Beit Lahia'>Beit Lahia</option>
              <option value='Jabalia'>Jabalia</option>
            </ReactBootstrap.Form.Control>
            <ReactBootstrap.Button
              style={{ marginRight: ' -88px' }}
              variant='outline-success'
              onClick={search}
            >
              Search
            </ReactBootstrap.Button>
          </div>
        </nav>
      </div>
      <br />
      <br /> <br />
      <div>
        {' '}
        <Link href='/bookinguser' onClick={console.log('kk')}>
          <Button
            style={{
              marginLeft: 580,
              marginBottom: '10px',
              backgroundColor: '#00848C',
            }}
            variant='contained'
            color='primary'
          >
            My Booking Office
          </Button>
        </Link>
      </div>
      <boot.Row style={{ marginLeft: 75, marginTop: '-65' }}>
        {data2.length === 0
          ? null
          : data2.map((element, index) => {
              return (
                <boot.Row>
                  <boot.Container>
                    <boot.Card key={index} style={{ width: '18rem' }}>
                      <boot.Card.Img
                        variant='top'
                        style={{ widt: '100%', height: '180px' }}
                        src={element.imgUrl}
                        className='img'
                      />

                      <boot.Card.Body>
                        <Rating
                          name='read-only'
                          value={element.rating}
                          readOnly
                        />
                        <label>Email : </label>
                        <label style={{ marginLeft: '10px' }}>
                          {'  '}
                          {element.email}
                        </label>
                        <br />
                        <label>Price : </label>
                        <label
                          style={
                            ({ marginLeft: '10px' },
                            { marginTop: '10px' },
                            { width: '100px' })
                          }
                        >
                          {'     '}
                          {element.price}
                          {'$'}
                        </label>
                        <br />
                        <label>location : </label>
                        <label style={{ marginLeft: '10px' }}>
                          {'  '}
                          {element.location}
                        </label>
                        <br />
                        <label>phoneowner : </label>
                        <label style={{ marginLeft: '10px' }}>
                          {'  '}
                          {element.phoneowner}
                        </label>
                        <br />
                        <br />

                        {/* Features */}
                        <button
                          id='feat-test'
                          onClick={(e) => {
                            console.log(e.target);
                            $(e.target).siblings('.feat').slideToggle();
                          }}
                          variant='primary'
                          style={{
                            color: 'white',
                            marginLeft: '2px',
                            backgroundColor: '#00848C',
                            width: '245px',
                          }}
                        >
                          Show more
                        </button>
                        <div className='feat'>
                          <br />
                          <label>Discription:</label>
                          <label style={{ marginLeft: '10px' }}>
                            {'  '}
                            {element.Discription}{' '}
                          </label>
                          <br />
                          <label>Features:</label>
                          <br />
                          {element.Vip_wifi === 1 ? (
                            <input
                              id='checkbox3'
                              type='checkbox'
                              checked='true'
                            />
                          ) : (
                            <input
                              id='checkbox_id'
                              type='checkbox'
                              checked={false}
                            />
                          )}
                          {'   '}
                          <label>Vip_wifi</label> <br />
                          {element.coffeeandtea === 1 ? (
                            <input
                              id='checkbox3'
                              type='checkbox'
                              checked='true'
                            />
                          ) : (
                            <input
                              id='checkbox_id'
                              type='checkbox'
                              checked={false}
                            />
                          )}
                          {'   '}
                          <label>coffeeandtea</label> <br />
                          {element.conditioning === 1 ? (
                            <input
                              id='checkbox3'
                              type='checkbox'
                              checked='true'
                            />
                          ) : (
                            <input
                              id='checkbox_id'
                              type='checkbox'
                              checked={false}
                            />
                          )}
                          {'   '}
                          <label>conditioning</label> <br />
                          {element.ele === 1 ? (
                            <input
                              id='checkbox3'
                              type='checkbox'
                              checked='true'
                            />
                          ) : (
                            <input
                              id='checkbox_id'
                              type='checkbox'
                              checked={false}
                            />
                          )}
                          {'   '}
                          <label>24 hours electricity</label> <br />
                          {element.water === 1 ? (
                            <input
                              id='checkbox3'
                              type='checkbox'
                              checked='true'
                            />
                          ) : (
                            <input
                              id='checkbox_id'
                              type='checkbox'
                              checked={false}
                            />
                          )}
                          {'   '}
                          <label>Water</label> <br />
                          {/* Features */}
                        </div>
                        <br />
                        <br />

                        <boot.Button
                          style={{
                            marginLeft: '2px',
                            backgroundColor: '#00848C',
                            width: '245px',
                          }}
                          variant='primary'
                          onClick={() => {
                            item = element;
                            console.log(item + 'iouhg');
                            handleShow();
                          }}
                        >
                          Rent
                        </boot.Button>

                        <boot.Modal
                          show={show}
                          onHide={handleClose}
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
                                <Typography
                                  variant='body2'
                                  color='textSecondary'
                                  component='p'
                                >
                                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify='space-around'>
                                      <KeyboardDatePicker
                                        margin='normal'
                                        id='date-picker-dialog'
                                        // label='Starting date'
                                        format='MM/dd/yyyy'
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                          'aria-label': 'change date',
                                        }}
                                      />
                                      <KeyboardDatePicker
                                        margin='normal'
                                        id='date-picker-dialog'
                                        // label='ending date'
                                        format='MM/dd/yyyy'
                                        value={selectedDate2}
                                        onChange={handleDateChange2}
                                        KeyboardButtonProps={{
                                          'aria-label': 'change date',
                                        }}
                                      />
                                    </Grid>
                                  </MuiPickersUtilsProvider>
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button
                                variant='secondary'
                                onClick={() => {
                                  console.log(
                                    moment(selectedDate).format('YYYY-MM-DD') +
                                      'date1'
                                  );
                                  console.log(element);
                                  office_id = element.office_id;
                                  const booking = {
                                    office_id: office_id,
                                    startdate: moment(selectedDate).format(
                                      'YYYY-MM-DD'
                                    ),
                                    enddate: moment(selectedDate2).format(
                                      'YYYY-MM-DD'
                                    ),
                                    emailuser: email,
                                    phoneuser: phoneuser,
                                    emailowner: item.email,
                                  };
                                  axios
                                    .post(
                                      'http://localhost:5000/addbooking',
                                      booking
                                    )
                                    .then((res) => {
                                      console.log(res.data);
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });

                                  handleClose();
                                }}
                              >
                                OK
                              </Button>
                              <Button
                                variant='secondary'
                                onClick={() => {
                                  handleClose();
                                }}
                              >
                                Cancel
                              </Button>
                            </CardActions>
                          </Card>
                        </boot.Modal>
                      </boot.Card.Body>
                    </boot.Card>

                    <br />
                  </boot.Container>
                </boot.Row>
              );
            })}

        {data.map((element, index) => {
          return (
            <boot.Row>
              <boot.Container>
                <boot.Card key={index} style={{ width: '18rem' }}>
                  <boot.Card.Img
                    variant='top'
                    style={{ widt: '100%', height: '180px' }}
                    src={element.imgUrl}
                    className='img'
                  />

                  <boot.Card.Body>
                    <Rating name='read-only' value={element.rating} readOnly />
                    <label>Email : </label>
                    <label style={{ marginLeft: '10px' }}>
                      {'  '}
                      {element.email}
                    </label>
                    <br />
                    <label>Price : </label>
                    <label
                      style={
                        ({ marginLeft: '10px' },
                        { marginTop: '10px' },
                        { width: '100px' })
                      }
                    >
                      {'     '}
                      {element.price}
                      {'$'}
                    </label>
                    <br />
                    <label>location : </label>
                    <label style={{ marginLeft: '10px' }}>
                      {'  '}
                      {element.location}
                    </label>
                    <br />
                    <label>phoneowner : </label>
                    <label style={{ marginLeft: '10px' }}>
                      {'  '}
                      {element.phoneowner}
                    </label>
                    <br />
                    <br />

                    {/* Features */}
                    <button
                      id='feat-test'
                      onClick={(e) => {
                        console.log(e.target);
                        $(e.target).siblings('.feat').slideToggle();
                      }}
                      variant='primary'
                      style={{
                        color: 'white',
                        marginLeft: '2px',
                        backgroundColor: '#00848C',
                        width: '245px',
                      }}
                    >
                      Show more
                    </button>
                    <div className='feat'>
                      <br />
                      <label>Discription:</label>
                      <label style={{ marginLeft: '10px' }}>
                        {'  '}
                        {element.Discription}{' '}
                      </label>
                      <br />
                      <label>Features:</label>
                      <br />
                      {element.Vip_wifi === 1 ? (
                        <input id='checkbox3' type='checkbox' checked='true' />
                      ) : (
                        <input
                          id='checkbox_id'
                          type='checkbox'
                          checked={false}
                        />
                      )}
                      {'   '}
                      <label>Vip_wifi</label> <br />
                      {element.coffeeandtea === 1 ? (
                        <input id='checkbox3' type='checkbox' checked='true' />
                      ) : (
                        <input
                          id='checkbox_id'
                          type='checkbox'
                          checked={false}
                        />
                      )}
                      {'   '}
                      <label>coffeeandtea</label> <br />
                      {element.conditioning === 1 ? (
                        <input id='checkbox3' type='checkbox' checked='true' />
                      ) : (
                        <input
                          id='checkbox_id'
                          type='checkbox'
                          checked={false}
                        />
                      )}
                      {'   '}
                      <label>conditioning</label> <br />
                      {element.ele === 1 ? (
                        <input id='checkbox3' type='checkbox' checked='true' />
                      ) : (
                        <input
                          id='checkbox_id'
                          type='checkbox'
                          checked={false}
                        />
                      )}
                      {'   '}
                      <label>24 hours electricity</label> <br />
                      {element.water === 1 ? (
                        <input id='checkbox3' type='checkbox' checked='true' />
                      ) : (
                        <input
                          id='checkbox_id'
                          type='checkbox'
                          checked={false}
                        />
                      )}
                      {'   '}
                      <label>Water</label> <br />
                      {/* Features */}
                    </div>
                    <br />
                    <br />

                    <boot.Button
                      style={{
                        marginLeft: '2px',
                        backgroundColor: '#00848C',
                        width: '245px',
                      }}
                      variant='primary'
                      onClick={() => {
                        item = element;
                        console.log(item + 'iouhg');
                        handleShow();
                      }}
                    >
                      Rent
                    </boot.Button>

                    <boot.Modal
                      show={show}
                      onHide={handleClose}
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
                            <Typography
                              variant='body2'
                              color='textSecondary'
                              component='p'
                            >
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify='space-around'>
                                  <KeyboardDatePicker
                                    margin='normal'
                                    id='date-picker-dialog'
                                    // label='Starting date'
                                    format='MM/dd/yyyy'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                      'aria-label': 'change date',
                                    }}
                                  />
                                  <KeyboardDatePicker
                                    margin='normal'
                                    id='date-picker-dialog'
                                    // label='ending date'
                                    format='MM/dd/yyyy'
                                    value={selectedDate2}
                                    onChange={handleDateChange2}
                                    KeyboardButtonProps={{
                                      'aria-label': 'change date',
                                    }}
                                  />
                                </Grid>
                              </MuiPickersUtilsProvider>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            variant='secondary'
                            onClick={() => {
                              console.log(
                                moment(selectedDate).format('YYYY-MM-DD') +
                                  'date1'
                              );
                              console.log(element);
                              office_id = element.office_id;
                              const booking = {
                                office_id: office_id,
                                startdate: moment(selectedDate).format(
                                  'YYYY-MM-DD'
                                ),
                                enddate: moment(selectedDate2).format(
                                  'YYYY-MM-DD'
                                ),
                                emailuser: email,
                                phoneuser: phoneuser,
                                emailowner: item.email,
                              };
                              axios
                                .post(
                                  'http://localhost:5000/addbooking',
                                  booking
                                )
                                .then((res) => {
                                  console.log(res.data);
                                })
                                .catch((err) => {
                                  console.log(err);
                                });

                              handleClose();
                            }}
                          >
                            OK
                          </Button>
                          <Button
                            variant='secondary'
                            onClick={() => {
                              handleClose();
                            }}
                          >
                            Cancel
                          </Button>
                        </CardActions>
                      </Card>
                    </boot.Modal>
                  </boot.Card.Body>
                </boot.Card>

                <br />
              </boot.Container>
            </boot.Row>
          );
        })}
      </boot.Row>
    </div>
  );
}
export default CustemarPage;
