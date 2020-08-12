
import Bar from '../bar/Bar';
import * as boot from 'react-bootstrap';
// import { Grid, TextField, Link } from '@material-ui/core';
import MediaCard from '../rentPage/rentPage'
import * as moment  from 'moment';


import { Backdrop } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
// import nodemailer from 'nodemailer';
import Modal from '@material-ui/core/Modal';
import { DateTime } from 'react-datetime-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';   
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from '@material-ui/core'; 
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';  
import axios from 'axios';
import jwt_decode from 'jwt-decode';
var item ={};
var email = '';

function CustemarPage() {

    const [selectedDate, setSelectedDate] = useState(
		new Date('2020-08-18')
    );
    const [selectedDate2, setSelectedDate2] = useState(
      new Date('2020-08-18')
      );
    const [data, setData] = useState([]);

	  const handleDateChange = date => {
		setSelectedDate(date);
	  }; 
   
    const handleDateChange2 = date => {
      setSelectedDate2(date);
    };
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:5000/getall',
        );
      console.log(result.data.success)
        setData(result.data.success);

      };
   
      fetchData();
  }, []);
  useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin); 
    console.log(decoded);
    email =decoded.email;
    console.log(email);
	});

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);
  
	return (
       
		<div>
            <Bar />

            <Link href='/bookinguser' onClick={console.log('kk')}>
        <Button variant='contained' color='primary'>
            My Booking Office
        </Button>
        </Link>
			{data.map((element, index) => {
				return (
                    <boot.Container>
                    <boot.Row>
                    
                    <boot.Col>
					<boot.Card  key = {index} style={{ width: '18rem' }}>
						<boot.Card.Img variant='top' src={element.imgUrl} />
						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							<boot.Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content
							</boot.Card.Text>
							<boot.Button variant='primary'>Rent</boot.Button>
						</boot.Card.Body>
					</boot.Card>
                    <br/>
                    </boot.Col>
                    <boot.Col>	<boot.Card  key = {index} style={{ width: '18rem' }}>
						<boot.Card.Img variant='top' src={element.imgUrl} />
						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							
        
    
							<boot.Button variant='primary'>Rent</boot.Button>
						</boot.Card.Body>
					</boot.Card>
                    <br/>
                    </boot.Col>
                    <boot.Col>
                    <boot.Card  key = {index} style={{ width: '18rem' }}>
						<boot.Card.Img variant='top' src={element.imgUrl} />

						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							<boot.Card.Text>
								{element.email}
							</boot.Card.Text>
						 {/* <Link href='/rentPage'> 
							<boot.Button variant='primary' onClick={function passEmail(){}}>Rent</boot.Button>
							 </Link> */}
							     <div>
	  <boot.Button variant="primary" onClick={() => {
					item= element
					// email = element.email
					console.log(item+ "iouhg");
					
					handleShow()
				  }}   >
        Rent
      </boot.Button>
      <boot.Button variant="primary" onClick={() => {
					handleShow2()
				  }}   >
        Rating
      </boot.Button>

       <boot.Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
		 <Card >
        <CardActionArea>
          <CardMedia
           
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
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
          {/* <Link href='/custumerPage' onClick={console.log('kk')}>
            <Button variant='contained' color='primary'>
              DONE
            </Button>
          </Link> */}
		   < Button  variant="secondary" onClick={() => {
         console.log(moment(selectedDate).format('YYYY-MM-DD') + "date1")

            const booking = {
							startdate : moment(selectedDate).format('YYYY-MM-DD') ,
							enddate : moment(selectedDate2).format('YYYY-MM-DD') ,
							emailuser: email,
							 emailowner: item.email
            }
						axios
						.post('http://localhost:5000/addbooking', booking)
						.then((res) => {
              console.log(res.data);
    
						})
						.catch((err) => {
						  console.log(err);
            })
            
        
           
						handleClose()
                      }}   >
            OK
          </Button>
          < Button  variant="secondary" onClick={() => {
						handleClose()
                      }}   >
            Cancel
          </Button>
        </CardActions>
      </Card>
      </boot.Modal> 
	  </div>
    <div>
    <boot.Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
		 <Card >
        <CardActionArea>
          <CardMedia
           
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          />
          <CardContent>
           
          </CardContent>
        </CardActionArea>
        <CardActions>
		   < Button  variant="secondary" onClick={() => {
						handleClose2()
                      }}   >
            OK
          </Button>
        </CardActions>
      </Card>
      </boot.Modal> 
    </div>
							 
						</boot.Card.Body>
					</boot.Card>
          
                    <br/>
                    </boot.Col>
                    
            </boot.Row>
            </boot.Container>
           
				);
			})}
           
		</div>
	);
}
export default CustemarPage;