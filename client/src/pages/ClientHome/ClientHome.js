import React, { Component } from 'react';
import '../../pages/ClientHome/style.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap4-modal';

class ClientHome extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = event => {
    const { email, password, firstName, lastName, phone, address } = this.state;
    console.log(this.props)
    this.props.onSubmit(email, password, firstName, lastName, phone, address);
  }

  render() {
    const { email, password, firstName, lastName, phone, address } = this.state;

    return (
      <div className="welcome container">
        <div className="row">
        <br />
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
         <h1 className="display-4 text-white font-weight-bold welcomeText">Welcome Back {/*{this.firstName}*/} </h1> 
        </div>
        <div className="col-sm-2"> </div>
        </div>
        <br />
        <br />
        <div className="row">
        <div className="card-deck">
        {/* Account Info Card */}
        <div className="col-sm-3">
        <button className="card p-3 mb-5 rounded" data-toggle="modal" data-target="#exampleModalCenter">
          <div className="card-body">
            <h1 className="card-title"><i className="fas fa-user-edit"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Account Info</h5>
            <p className="card-text">Edit your Account Information.</p>
          </div>
        </button>
        <Modal visible={false} onClickBackdrop={this.modalBackdropClicked} className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-header" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <h5 class="modal-title text-success" id="exampleModalLongTitle"><strong>Edit Account Info</strong></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
              <br />
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    className='form-control'
                    id='firstName'
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={this.handleInputChange}
                    />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder="Last Name"
                    value={lastName}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    id='address'
                    type='text'
                    name='address'
                    placeholder="Address"
                    value={address}
                    onChange={this.handleInputChange} />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    id='phone'
                    type='text'
                    name='phone'
                    placeholder="Phone Number"
                    value={phone}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <br />
              <div className="form-group text-left">
                <label form="email">Email</label>
                <input
                  className="form-control"
                  id='email'
                  type="email"
                  name='email'
                  aria-describedby="emailHelp"
                  placeholder="Email@provider.com"
                  value={email}
                  onChange={this.handleInputChange} />
              </div>
              <div className="form-group text-left">
                <label form="password">Password</label>
                <input
                  className="form-control"
                  id='password'
                  type="password"
                  name='password'
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInputChange} />
              </div>
              <button type="submit" className="btn btn-success float-left">Update</button>
              <button type="submit" className="btn btn-light float-left">Cancel</button>
            </form>
          </Modal>
          </div>
        {/* Completed Card */}
        <div className="col-sm-3">
        <button className="card p-3 mb-5 rounded" data-toggle="modal" data-target="#completedModal">
          <div className="card-body">
            <h1 className="card-title"><i className="fas fa-calendar-check"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Completed</h5>
            <p className="card-text">View your Completed Services.</p>
          </div>
        </button>
        <Modal visible={false} onClickBackdrop={this.modalBackdropClicked} className="completedModal-lg" dialogClassName="modal-lg" id="completedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-header" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <h5 class="modal-title text-success" id="exampleModalLongTitle"><strong>Completed Services</strong></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
              <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"><strong>Date</strong></th>
                    <th scope="col"><strong>Service</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">03/21/2019</th>
                    <td>aeration, lawncut</td>
                  </tr>
                  <tr>
                    <th scope="row">01/28/2019</th>
                    <td>trim hedge?idk</td>
                  </tr>
                </tbody>
              </table>
              </div> 
          </Modal>
        </div>

        {/* Upcoming Card */}
        <div className="col-sm-3">
        <button className="card p-3 mb-5 rounded" data-toggle="modal" data-target="#upcomingModal">
          <div className="card-body">
            <h1 className="card-title"><i className="fas fa-calendar-day"></i></h1>
            <h5 className="card-subtitle mb-2 text-muted">Upcoming</h5>
            <p className="card-text">View your Upcoming Services.</p>
          </div>
        </button>
        <Modal visible={false} onClickBackdrop={this.modalBackdropClicked} className="upcomingModal-lg" id="upcomingModal" dialogClassName="modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-header" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <h5 class="modal-title text-success" id="exampleModalLongTitle"><strong>Upcoming Services</strong></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
              <table className="table">
                <thead>
                  <tr>
                  <th scope="col"><strong>Date</strong></th>
                  <th scope="col"><strong>Service</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">10/21/2019</th>
                    <td>lawn cut</td>
                  </tr>
                  <tr>
                    <th scope="row">11/03/2019</th>
                    <td>aeration</td>
                  </tr>
                </tbody>
              </table>
          </Modal>
        </div>
      
      {/* Scheduling Card */}
      <div className="col-sm-3">
      <button className="card p-3 rounded">
      <Link className='nav-link' to='/scheduling' onClick={this.toggleCollapse}>
        <div className="card-body">
          <h1 className="card-title"><i className="fas fa-calendar-plus"></i></h1>
          <h5 className="card-subtitle mb-2 text-muted">Scheduling</h5>
          <p className="card-text">Schedule a Service.</p>
        </div>
      </Link>
      </button>
      </div>

          </div>
        </div>
        </div>
     
    );
  }
}

export default ClientHome;
