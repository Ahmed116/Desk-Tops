import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
class Bar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location:'',
      map : []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick(event){
    this.setState({location: event.target.value})
    }
     
    handleSubmit(event){
      console.log(this.state)
     const {location } = this.state;
 
     axios
       .post(`http://localhost:5000/search`, {location})
       .then((response) => {
         console.log(response.data.success);

          this.setState({map: response.data.success})

       })
       .catch((error) => {
         console.log('error', error);
         alert('Error');
       });
     event.preventDefault();
   }

  render() {
    console.log(this.state)
  return (
    <div>
    <ReactBootstrap.Navbar bg='light' expand='lg'>
      <ReactBootstrap.Navbar.Brand href='/landingPage'>
        BookingFinder
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
      <ReactBootstrap.Navbar.Collapse id='basic-navbar-nav'>
        <ReactBootstrap.Nav className='mr-auto'>
          <ReactBootstrap.Nav.Link href='/landingPage'>
            Home
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/login'>
            log-in As Custumer
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/loginForOwner'>
            log-in As Owner
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.NavDropdown title='more' id='basic-nav-dropdown'>
            <ReactBootstrap.NavDropdown.Item href='#action/3.1'>
              about
            </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href='#action/3.2'>
              contact us
            </ReactBootstrap.NavDropdown.Item>
            {/* <ReactBootstrap.NavDropdown.Item href='#action/3.3'>
                Something
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href='#action/3.4'>
                Separated link
              </ReactBootstrap.NavDropdown.Item> */}
          </ReactBootstrap.NavDropdown>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Form inline>
          {/* <ReactBootstrap.FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
          /> */}
          <ReactBootstrap.Form.Control as="select" defaultValue="Gaza" onChange={this.handleClick}>
            <option value ="Gaza">Gaza</option>
            <option value ="KhanYounes">KhanYounes</option>
            <option value ="Rafah">Rafah</option>
            <option value ="Dair AlBalah">Dair AlBalah</option>
            <option value ="Beit Lahia">Beit Lahia</option>
            <option value ="Jabalia">Jabalia</option>
            
          </ReactBootstrap.Form.Control>
          <ReactBootstrap.Button variant='outline-success' onClick ={this.handleSubmit}>
            Search
          </ReactBootstrap.Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
    <div>
    {this.state.map.map((element, index) => {
				return (
                    <ReactBootstrap.Container>
                    <ReactBootstrap.Row>
                    
                    <ReactBootstrap.Col>
					<ReactBootstrap.Card  key = {index} style={{ width: '18rem' }}>
						<ReactBootstrap.Card.Img variant='top' src={element.imgUrl} />
						<ReactBootstrap.Card.Body>
							<ReactBootstrap.Card.Title>{element.Discription} </ReactBootstrap.Card.Title>
							<ReactBootstrap.Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content
							</ReactBootstrap.Card.Text>
							<ReactBootstrap.Button variant='primary'>Rent</ReactBootstrap.Button>
						</ReactBootstrap.Card.Body>
					</ReactBootstrap.Card>
                    <br/>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col>	<ReactBootstrap.Card  key = {index} style={{ width: '18rem' }}>
						<ReactBootstrap.Card.Img variant='top' src={element.imgUrl} />
						<ReactBootstrap.Card.Body>
							<ReactBootstrap.Card.Title>{element.Discription} </ReactBootstrap.Card.Title>
							<ReactBootstrap.Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content
							</ReactBootstrap.Card.Text>
							<ReactBootstrap.Button variant='primary'>Rent</ReactBootstrap.Button>
						</ReactBootstrap.Card.Body>
					</ReactBootstrap.Card>
                    <br/>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col>
                    <ReactBootstrap.Card  key = {index} style={{ width: '18rem' }}>
						<ReactBootstrap.Card.Img variant='top' src={element.imgUrl} />
						<ReactBootstrap.Card.Body>
							<ReactBootstrap.Card.Title>{element.Discription} </ReactBootstrap.Card.Title>
							<ReactBootstrap.Card.Text>
							{element.location}
							</ReactBootstrap.Card.Text>
							<ReactBootstrap.Button variant='primary'>Rent</ReactBootstrap.Button>
						</ReactBootstrap.Card.Body>
					</ReactBootstrap.Card>
                    <br/>
                    </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            </ReactBootstrap.Container>
				);
			})}
    </div>
    </div>
  );
}

}
export default Bar;