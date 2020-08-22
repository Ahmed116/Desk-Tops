import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import './book.css'

var email = '';

export default function Booking() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin);
		console.log(decoded);
		email = decoded.email;
		console.log(email);
	});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.post('http://localhost:5000/getbooking', {
				email,
			});
			console.log(result.data);
			setData(result.data.success);
		};

		fetchData();
	}, []);
	return (
		<div>
			<div >
				<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" style={{ backgroundColor: '#00848C' }} id="mainNav">
					<div class="container">
						<a class="navbar-brand js-scroll-trigger" href="/landingPage">Desk Tops</a>
						<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
						<div class="collapse navbar-collapse" id="navbarResponsive">
							<ul class="navbar-nav ml-auto my-2 my-lg-0">
								<li class="nav-item"><a class="nav-link js-scroll-trigger" href="/ownerPage">My Offices</a></li>
								<li class="nav-item"><a class="nav-link js-scroll-trigger" href="/contactPage">Let's Talk</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<boot.Row className='rowBook'>
				{data.map((element, index) => {
					return (
						<boot.Card className='card' key={index} style={{ width: '18rem' }}>
							<boot.Card.Title className='email' style={{color:"#00848C"}}> Rent Information </boot.Card.Title>

							<boot.Card.Body>
							<boot.Card.Title>
							<label>Email :{' '} {element.emailuser}</label>
							</boot.Card.Title>
							<boot.Card.Title>
 							<label>phone :{' '}{element.phoneuser}</label>
							 </boot.Card.Title>
 							<boot.Card.Title>
 								<label>start date :{' '}{moment(element.startdate).format('YYYY-MM-DD')}</label>{' '}
 							</boot.Card.Title>
 							<boot.Card.Title>
 								<label>End date :{'  '}{moment(element.enddate).format('YYYY-MM-DD')}</label>
 							</boot.Card.Title>
							</boot.Card.Body>
						</boot.Card>
					);
				})}
			</boot.Row>
			
		</div>
	);
}
