import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo.png';
import classes from './style.module.css';
import { connect } from 'react-redux';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <Link className="navbar-brand" to="/"><img src={Logo} className={classes.logo} /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: 'red' }} to="/" exact className="nav-link">Trang chủ</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {this.props.credentials ? <li className="nav-item">
                                <span className="nav-link">Hi,{this.props.credentials.hoTen}</span>
                            </li> :
                                <>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: 'red' }} to="/signup" exact className="nav-link">Đăng kí</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={{ color: 'red' }} to="/signin" exact className="nav-link">Đăng nhập</NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        credentials: state.user.credentials,
    }
}

export default connect(mapStateToProps)(Header);