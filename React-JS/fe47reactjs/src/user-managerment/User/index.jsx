import React, { Component } from "react";
import UserItem from "../userItem";
import { connect } from 'react-redux';
class Users extends Component {
  renderListUser() {
    return this.props.filter ?
      this.props.userList.filter(item => item.type.toLowerCase() === this.props.filter.toLowerCase()).map((item, index) => {
        return (
          <UserItem item={item} key={index} />
        )
      }) :
      this.props.userList.map((item, index) => {
        return (
          <UserItem item={item} key={index} />
        )
      })

  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListUser()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.userList,
    filter: state.filter,
  }
}
export default connect(mapStateToProps)(Users);
