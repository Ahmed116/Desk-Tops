import { Backdrop } from '@material-ui/core';
import * as boot from 'react-bootstrap';
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
import Navbar from "../../navbar/navbar";
var email ='';

export default function Bookinguser() {
    const [data, setData] = useState([]);

    useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin); 
    console.log(decoded);
    email =decoded.email;
    console.log(email);
	});

    useEffect(() => {
        
        const fetchData = async () => {
          const result = await axios.post(
            'http://localhost:5000/getbookinguser',{
                email
            }
          );
        console.log(result.data)
          setData(result.data.success);
  
        };
     
        fetchData();
    }, []);
    return(
        <div> 
            <Navbar/>
    {data.map((element, index) => {
				return (
                    <boot.Container> 
                    <boot.Row>
                    
                    <boot.Col>
                    <br/>
                    </boot.Col>
                    <boot.Col>
                        	<boot.Card  key = {index} style={{ width: '18rem' }}>
                            <boot.Card.Title>{element.emailowner}</boot.Card.Title>
						
						<boot.Card.Body>
							<boot.Card.Title>{element.startdate} </boot.Card.Title>
                            <boot.Card.Title>{element.enddate} </boot.Card.Title>
							
						</boot.Card.Body>
					</boot.Card>
                    <br/>
                    </boot.Col>
                    <boot.Col>
							     <div>
   
       
	  </div>
    
							 
						
                    <br/>
                    </boot.Col>
            </boot.Row>
            </boot.Container>
				);
			})}
    </div>
    )}