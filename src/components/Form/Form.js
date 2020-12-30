import React from 'react'
import './Form.css'
import Logo from '../../components/Logo/Logo'

const Form = () => {
        return (
                <>
                    <div className="form-containers">
                        <span className="form-contact-container">
                            <Logo></Logo>
                            <span className="form-contact-info">Contact Us</span>
                            <span className="form-contact-info">4398 Harter Street</span>
                            <span className="form-contact-info">Miami, Florida 33801</span>
                            <span className="form-contact-info">Phone (937) 575 - 8211</span>
                                <input 
                                    idName="right" 
                                    type="name" 
                                    placeholder="Name" 
                                    autoComplete="off" 
                                    autoCorrect="off"
                                    required>
                                </input>
                                <input 
                                    idName="right" 
                                    type="email" 
                                    placeholder="Email" 
                                    autoComplete="off" 
                                    autoCorrect="off">
                                </input>
                                <input 
                                    idName="right"                                           
                                    type="numbers" 
                                    placeholder="Contact Number" 
                                    autoCorrect="off">
                                </input>
                                <input 
                                    idName="right" 
                                    type="email" 
                                    placeholder="Email" 
                                    autoComplete="off" 
                                    autoCorrect="off">
                                </input>
                        </span>
                            <div className="form-input-container">
                                <div className="form-column-right">
                                    <textarea idName="right" placeholder="Message"></textarea>
                                </div>
                                    <button className="form-button" type="submit">Send</button>
                            </div>
                    </div>
                </>
        );
}

export default Form;