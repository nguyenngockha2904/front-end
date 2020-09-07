import React, { Component } from "react";
import Search from "../Search";
import Users from "../User";
import Modal from "../Modal";
import { connect } from 'react-redux';
import { SHOW_MODAL } from "../Redux/actions/type";
class Home extends Component {
  handleToggleDisplayModal = () => {
    console.log(this.props.showModal);
  }

  handleAddUser = () => {
    // action là 1 object : type,payload
    const action = {
      type: SHOW_MODAL,//đặt tả yêu cầu
      payload: {
        username: '',
        name: '',
        email: '',
        phoneNumber: '',
        type: '',
      },
    };
    this.props.dispatch(action);
  }
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-outline-success"
            onClick={this.handleAddUser}
          >
            Add User
          </button>
        </div>
        <Users />
        {this.props.showModal && <Modal />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showModal: state.showModal[0]
  }
}


export default connect(mapStateToProps)(Home);
