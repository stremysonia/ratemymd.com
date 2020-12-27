import React from 'react';
import './Footer.css';
import 'boxicons'

const Footer = () => {
            return (
                <>
                    <div className="footer-container">
                        <div className="rights">
                            <li className="footer-copyright">All Rights Reserved. Copyright © 2020 Sonia St.Remy</li>
                        </div>
                        <div className="footer">
                            <a className="about" 
                                href="about">About Us
                            </a>
                        </div>
                            <li className="footer">
                                <a className="contact" 
                                    href="contact">Contact
                                </a>
                            </li>
                                <li className="footer">
                                    <a target='-blank'
                                        rel="noopener noreferrer"
                                        href="#">
                                            <box-icon class="icons" name='facebook' type='logo' size='sm' animation='tada-hover' color='#1564c9'>
                                            </box-icon>
                                    </a>
                                </li>
                                    <li className="footer">
                                        <a target='-blank'
                                            rel="noopener noreferrer"
                                            href="#">
                                                <box-icon class="icons" name='instagram-alt' type='logo' size="sm" animation='tada-hover' color='#ff2079'>
                                                </box-icon>
                                        </a>
                                    </li>
                                        <li className="footer">
                                            <a target='-blank'
                                                rel="noopener noreferrer"
                                                href="#">
                                                    <box-icon class="icons" name='twitter' type='logo' size='sm' animation='tada-hover' color='#52c3d3'>
                                                    </box-icon>
                                            </a>
                                        </li>
                    </div>
                </>
            );
}

export default Footer;

