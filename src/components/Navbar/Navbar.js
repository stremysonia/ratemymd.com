import React from 'react';
import './Navbar.css';
// import '../Logo/Logo'
import 'boxicons'

const Navbar = () => {
            return (
                <>
                    <nav className="navbar-container">
                        <div className="navbar-links">
                            {/* <Logo/> */}
                            {/* <a href="/" className="logo-container">
                                <div className="logo">Ratemymd</div>
                                <div className="logo logo-1">.</div>
                                <div className="logo">com</div> */}
                                {/* <img src={shutterstock_image} className="logo" height="120rem" width="120rem" alt=""/> */}
                            {/* </a> */}
                                <input type="text" className="search-bar " placeholder="Search . . ." autoCapitalize="off" autoCorrect="off">
                                </input>
                                    <box-icon class="search-bar-icon" name='search' size='md' animation='burst-hover'>
                                    </box-icon>
                                        <a className="link" href="doctors">Doctors</a>
                                        <a className="link" href="hospitals">Hospitals</a>
                                        <a className="link" href="nurses">Nurses</a>
                                        <a className="link" href="sign in">Sign In</a>
                                        <a className="link" href="log out">Log Out</a>
                        </div>
                    </nav>
                </>
            );
}

export default Navbar;