import React, { Fragment } from "react"
import { Component } from "react";
import Logo from "../../Assets/images/logo.svg"
import NoUser from "../../Assets/images/noUser.svg"


class Header extends Component {
    render() {
        return (

            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="li-color nav-link" href="#">Become a Handymen</a>
                            </li>
                            <li className="nav-item">
                                <a className="li-color nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item dropdown header-drop">
                                <div className="nav-link header-drop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="burger-bar">
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                        <span className="bar"></span>
                                    </div>
                                    <img src={NoUser} />
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" data-toggle="modal" data-target="#staticBackdrop">Sign Up</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Login</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header