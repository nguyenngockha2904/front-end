import React, { Fragment } from 'react';
import './App.css';
import HomeScreen from './Screens/Home';
import CourseDetailScreen from './Screens/Detail';
import SignUpScreen from './Screens/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Layouts/Header';
import SignInScreen from './Screens/SignIn';
import DemoHook from './demoHook';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from './Redux/Actions';
import { FETCH_CREDENTIALS } from './Redux/Actions/type';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/detail/:courseId" component={CourseDetailScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/signin" component={SignInScreen} />
          <Route path="/demohook" component={DemoHook} />
          <Route path="/" component={HomeScreen} />

        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialFromLocal = () => {
    const credentialStr = localStorage.getItem('credentials');
    if (credentialStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(credentialStr)));
    }
  }
  componentDidMount() {
    this._getCredentialFromLocal();
  }
}
const mapStateToProps = state => {
  return {

  }
}


export default connect()(App);
