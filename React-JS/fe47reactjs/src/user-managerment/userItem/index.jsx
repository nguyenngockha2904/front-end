import React, { Component } from "react";
import { connect } from 'react-redux';
import { SHOW_MODAL, DELETE_USER } from "../Redux/actions/type";
class UserItem extends Component {
  handleShowModal = () => {
    const action = {
      type: SHOW_MODAL,
      payload: this.props.item
    }
    this.props.dispatch(action);
  }
  handleDelete = () => {
    const action = {
      type: DELETE_USER,
      payload: this.props.item.username
    }
    this.props.dispatch(action);
  }
  render() {
    const { email, name, phoneNumber, type, username } = this.props.item;
    return (
      <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{type}</td>
        <td>
          <button
            className="btn btn-outline-info mr-2"
            onClick={this.handleShowModal}
          >
            Edit
          </button>
          <button className="btn btn-outline-danger"
            onClick={this.handleDelete}
          >Delete</button>
        </td>
      </tr>
    );
  }
}
export default connect()(UserItem);
