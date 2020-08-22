import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link, Box } from '@material-ui/core';
import Rating from 'material-ui-rating';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';
import $ from 'jquery';
const history = createBrowserHistory();
var email = '';
var office_id = 0;
export default function Ownerpage() {
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
            const result = await axios.post(
                'http://localhost:5000/getoffice', {
                email
            }
            );
            console.log(result.data)
            setData(result.data.success);

        };

        fetchData();
    }, []);
    return (
        <div style={{ marginTop: "45px" }}>
            <div className="aaa">
                <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" style={{ backgroundColor: '#00848C' }} id="mainNav">
                    <div class="container">
                        <a class="navbar-brand js-scroll-trigger" href="/landingPage">Desk Tops</a>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto my-2 my-lg-0">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" onClick={() => {
                                    localStorage.removeItem('usertoken');
                                    history.push('');
                                    window.location.reload('/landingPage');
                                }}>LogOut</a></li>
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/contactPage">Let's Talk</a></li>
                            </ul>
                        </div>
                    </div>
                </nav></div>
            <br /><br /> <br />
            <div>
                <Link href='/cal' onClick={console.log('kk')}>
                    <Button style={{ backgroundColor: '#00848C', marginLeft: "410px", width: '159px' }} variant='contained' color='primary'>
                        CLENDER
        </Button>
                </Link>
                <Link href='/addOffice' onClick={console.log('kk')}>
                    <Button style={{ backgroundColor: '#00848C', marginLeft: "30px", width: '159px' }} variant='contained' color='primary'>
                        ADD OFFICE
        </Button>
                </Link>
                <Link href='/bookingoffice' onClick={console.log('kk')}>
                    <Button style={{ backgroundColor: '#00848C', marginLeft: "30px" }} variant='contained' color='primary'>
                        My Booking Office
        </Button>
                    <hr />
                    <br />
                </Link>
            </div>
            <boot.Row style={{ marginLeft: 57 }}>
                {data.map((element, index) => {
                    return (
                        <boot.Row >
                            <boot.Container>

                                <boot.Card key={index} style={{ width: '18rem',margin:'10px' }}>
                                    <boot.Card.Img style={{widt:'100%',height:'180px'}} variant='top' src={element.imgUrl} className="img" />

                                    <boot.Card.Body>
                                        <Rating name='read-only' value={element.rating} readOnly />
                                        <label>Price:</label>
                                        <label style={{ marginLeft: "10px" }, { marginTop: "10px" }, { width: "100px" }}>{'  '}{element.price}{'$'}</label><br />
                                        <label>location:</label>
                                        <label style={{ marginLeft: "10px" }}>{'  '}{element.location}</label><br />
                                        <br /><br />

                                        {/* Features */}
                                        <button id="feat-test" onClick={(e) => {
                                            console.log(e.target)
                                            $(e.target).siblings('.feat').slideToggle();
                                        }} style={{ marginRight: "10px", borderRadius: '4px', fontWeight: 400, color: 'white', backgroundColor: '#00848C', width: '100%', height: '35px' }}
                                        >Show more</button>
                                        <div className="feat">
                                            <br />
                                            <label>Discription:</label>
                                            <label style={{ marginLeft: "10px" }}>{'  '}{element.Discription} </label><br />
                                            <label>Features:</label>
                                            <br />
                                            {element.Vip_wifi === 1 ? (
                                                <input id='checkbox3' type='checkbox' checked='true' />
                                            ) : (
                                                    <input id='checkbox_id' type='checkbox' checked={false} />
                                                )}
                                            {'   '}
                                            <label>Vip_wifi</label> <br />
                                            {element.coffeeandtea === 1 ? (
                                                <input id='checkbox3' type='checkbox' checked='true' />
                                            ) : (
                                                    <input id='checkbox_id' type='checkbox' checked={false} />
                                                )}
                                            {'   '}
                                            <label>coffeeandtea</label> <br />
                                            {element.conditioning === 1 ? (
                                                <input id='checkbox3' type='checkbox' checked='true' />
                                            ) : (
                                                    <input id='checkbox_id' type='checkbox' checked={false} />
                                                )}
                                            {'   '}
                                            <label>conditioning</label> <br />
                                            {element.ele === 1 ? (
                                                <input id='checkbox3' type='checkbox' checked='true' />
                                            ) : (
                                                    <input id='checkbox_id' type='checkbox' checked={false} />
                                                )}
                                            {'   '}
                                            <label>24 hours electricity</label> <br />
                                            {element.water === 1 ? (
                                                <input id='checkbox3' type='checkbox' checked='true' />
                                            ) : (
                                                    <input id='checkbox_id' type='checkbox' checked={false} />
                                                )}
                                            {'   '}
                                            <label>Water</label> <br />

                                            {/* Features */}
                                        </div>
                                        <br />
                                        <br />


                                        < Button style={{ marginLeft: 80, backgroundColor: '#00848C', color: "white" }} color='primary' variant="secondary" onClick={() => {
                                            office_id = element.office_id;
                                            console.log(office_id)
                                            axios
                                                .post('http://localhost:5000/deletoff', { office_id })
                                                .then((res) => {
                                                    console.log(res.data);
                                                    window.location.reload(true);
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                })
                                        }}   >
                                            DELETE
                                 </Button>

                                    </boot.Card.Body>
                                </boot.Card>

                                <br />
                            </boot.Container>
                        </boot.Row>
                    );
                })}
            </boot.Row>


        </div>
    )
}



