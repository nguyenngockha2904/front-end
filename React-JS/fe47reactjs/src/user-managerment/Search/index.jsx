import React, { Component } from "react";
import { connect } from 'react-redux';
import { FIND_USER } from "../Redux/actions/type";
class Search extends Component {
  state = {
    value: '',
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleSearch = () => {
    const action = {
      type: FIND_USER,
      payload: this.state.value
    }
    this.props.dispatch(action);
  }
  render() {
    return <div className="d-flex">
      <input type="text" onChange={this.handleChange} value={this.state.value} className="form-control m-0 w-75" />
      <button type='button' className="btn btn-success" onClick={this.handleSearch}>Search</button>
    </div>;

  }
}
export default connect()(Search);
