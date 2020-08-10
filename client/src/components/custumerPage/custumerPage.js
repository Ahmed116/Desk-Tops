
import Bar from '../bar/Bar';
import * as boot from 'react-bootstrap';
// import { Grid, TextField, Link } from '@material-ui/core';

import { Backdrop  ,Link } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

// class custemarPage extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         alloffice : []
//       };
//     //   this.handleSubmit = this.handleSubmit.bind(this);
//     //   this.handleChange = this.handleChange.bind(this);
//     }
  
//     useEffect(() => {
//         axios
//         .get('http://localhost:5000/getall')
//         .then((result) => {
//           console.log(result.data);
//           // const fava = result.data;
//           // this.setState({ fav: fava });
//         })
//         .catch((err) => {
//           console.log('Error', err);
//         })
// 	})
   
//             render() {
//             return (
//                 <div>
//                     <Bar />
//                     {this.state.inBackdrop.map((element, index) => {
//                         return (
//                             <boot.Card style={{ width: '18rem' }}>
//                                 <boot.Card.Img variant='top' src='holder.js/100px180' />
//                                 <boot.Card.Body>
//                                     <boot.Card.Title>Card Title</boot.Card.Title>
//                                     <boot.Card.Text>
//                                         Some quick example text to build on the card title and make up
//                                         the bulk of the card's content
//                                     </boot.Card.Text>
//                                     <boot.Button variant='primary'>Go somewhere</boot.Button>
//                                 </boot.Card.Body>
//                             </boot.Card>
//                         );
//                     })}
//                 </div>
//             )
//         }
//     }
//         export default custemarPage;
     
import axios from 'axios';
 
function CustemarPage() {

    const [data, setData] = useState([]);
 
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
 
	return (
       
		<div>
            <Bar />
           
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
							<boot.Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content
							</boot.Card.Text>
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
								Some quick example text to build on the card title and make up
								the bulk of the card's content
							</boot.Card.Text>
							<Link href='/rentPage'>
							<boot.Button variant='primary'>Rent</boot.Button>
							</Link>
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