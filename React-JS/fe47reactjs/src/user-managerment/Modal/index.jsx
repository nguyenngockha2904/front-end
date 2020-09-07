import React, { Component } from "react";
import { connect } from 'react-redux';
import { HIDE_MODAL, ADD_USER, EDIT_USER } from '../Redux/actions/type';
class Modal extends Component {
  handleCloseModal = () => {
    const action = {
      type: HIDE_MODAL
    }
    this.props.dispatch(action);
  }
  state = {
    user: {
      username: '',
      name: '',
      email: '',
      phoneNumber: '',
      type: '',
    },
  }
  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.user);
    const action = this.props.item.username === '' ? {
      type: ADD_USER,
      payload: this.state.user
    } : {
        type: EDIT_USER,
        payload: this.state.user
      };
    this.props.dispatch(action);
  }
  handleSetValue = () => {
    this.setState({
      user: this.props.item
    })
  }
  render() {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="bg-white w-50 mx-auto px-5 pb-3 rounded ">
          <h1 className="text-center display-4 m-0">Form User</h1>
          <form className="text-left" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name='username' onChange={this.handleChange} value={this.state.user.username} />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name='name' onChange={this.handleChange} value={this.state.user.name} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name='email' onChange={this.handleChange} value={this.state.user.email} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" className="form-control" name='phoneNumber' onChange={this.handleChange} value={this.state.user.phoneNumber} />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select className="form-control" name='type' onChange={this.handleChange} value={this.state.user.type}>
                <option>USER</option> <option>VIP</option>
              </select>
            </div>

            <div className='d-flex justify-content-between'>
              <button type="submit" className="btn btn-success" onClick={this.handleCloseModal}>
                {this.props.item.username === '' ? 'Submit' : 'Edit'}
              </button>

              <button type='button' className="btn btn-light"
                onClick={this.handleCloseModal}
              >
                close
            </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.handleSetValue();
  }
}
const mapStateToProps = state => {
  return {
    item: state.showModal[1]
  }
}

export default connect(mapStateToProps)(Modal);