import React from 'react';
import './Navbar.css';
// import '../Logo/Logo'
import 'boxicons'

const Navbar = () => {
            return (
                <>
                    <div className="navbar-container">
                        <div className="search-bar-container">
                            <input type="text" className="search" placeholder="Search . . ." required>
                            </input>
                                <a href="#">
                                    <box-icon class="search-bar-icon" 
                                        name='search' size='sm' animation='burst-hover'>
                                    </box-icon>
                                </a>
                        </div>
                                    <ul className="links-container">
                                        <li><a className="navbar-links"
                                            href="#">Doctors</a>
                                        </li>
                                            <li><a className="navbar-links" 
                                                href="#">Hospitals</a> 
                                            </li>
                                                <li><a className="navbar-links" 
                                                    href="#">Nurses</a>
                                                </li>
                                                    <li><a className="navbar-links" 
                                                        href="#">Sign In</a>
                                                    </li>
                                                        <li><a className="navbar-links" 
                                                            href="#">Sign Out</a>
                                                        </li>
                                    </ul>
                        </div>
                    
                </>
            );
}

export default Navbar;