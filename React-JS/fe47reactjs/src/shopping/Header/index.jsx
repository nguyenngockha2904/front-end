import React, { Component } from 'react';
import logo from '../../assets/img/logo (1).png'
import classes from './style.module.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"><img src={logo} className={classes.logo} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                  </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item">Action</a>
                                    <a className="dropdown-item">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <ShoppingCartOutlinedIcon
                                data-toggle="modal" data-target="#modelId"
                                className={classes.cartIcon} />
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;