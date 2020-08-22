import React from 'react';
import axios from 'axios';
import '../contactus/contactus.css';
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:5000/contactus',
      data: this.state,
    }).then((response) => {
      if (response.data.success === 'added') {
        alert('Message Sent.');
        this.resetForm();
      } else {
        alert('Message failed to send.');
      }
    });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <div class='contact3 py-5'>
        <div className='aaa'>
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
                    <a class='nav-link js-scroll-trigger' href='/contactPage'>
                      Let's Talk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <br />
        <br /> <br />
        <div></div>
        <div class='row no-gutters'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-6'>
                <div class='card-shadow'>
                  <br />
                  <br />
                  <br />
                  <img
                    src='https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2019/07/support.png'
                    class='img-fluid'
                  />
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='contact-box ml-3'>
                  <div></div>
                  <h1 class='font-weight-light mt-2'>Quick Contact</h1>
                  <br />
                  <form
                    class='mt-4'
                    onSubmit={this.handleSubmit.bind(this)}
                    method='POST'
                  >
                    <div class='row'>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <input
                            className='form-control'
                            type='text'
                            placeholder='name'
                            id='name'
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)}
                          />
                          <br />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <input
                            className='form-control'
                            type='email'
                            placeholder='email address'
                            id='email'
                            aria-describedby='emailHelp'
                            value={this.state.email}
                            onChange={this.onEmailChange.bind(this)}
                          />
                          <br />
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <div class='form-group mt-2'>
                          <textarea
                            class='form-control'
                            rows='3'
                            placeholder='message'
                            id='message'
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)}
                          ></textarea>
                        </div>
                      </div>
                      <div class='col-lg-12'>
                        <button
                          type='submit'
                          class='btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2'
                          style={{ backgroundColor: '#00848C' }}
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class='col-lg-12'>
                <div class='card mt-4 border-0 mb-4'>
                  <div class='row'>
                    <div class='col-lg-4 col-md-4'>
                      <div class='card-body d-flex align-items-center c-detail pl-0'>
                        <div class='mr-3 align-self-center'>
                          <img src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png' />
                        </div>
                        <div class=''>
                          <h6 class='font-weight-medium'>Address</h6>
                          <p class=''>Palestine -Gaza</p>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-4 col-md-4'>
                      <div class='card-body d-flex align-items-center c-detail'>
                        <div class='mr-3 align-self-center'>
                          <img src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png' />
                        </div>
                        <div class=''>
                          <h6 class='font-weight-medium'>Phone</h6>
                          <p class=''>+972-592896410</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class='col-lg-4 col-md-4'
                      style={{ marginLeft: '-17px' }}
                    >
                      <div class='card-body d-flex align-items-center c-detail'>
                        <div class='mr-3 align-self-center'>
                          <img src='https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png' />
                        </div>
                        <div class=''>
                          <h6 class='font-weight-medium'>Email</h6>
                          <p class='' style={{ frontSize: '2px' }}>
                            bookingfinder5by5team@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactPage;
