import React, { Fragment } from 'react';
import './App.css';
import HomeScreen from './Screens/Home';
import CourseDetailScreen from './Screens/Detail';
import SignUpScreen from './Screens/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Layouts/Header';
import SignInScreen from './Screens/SignIn';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail/:courseId" component={CourseDetailScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Route path="/signin" component={SignInScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
