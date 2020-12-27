import React from 'react'
import './Form.css'

const Form = () => {
        return (
                <>
                    <div className="form-container">
                        <div>
                            <input type="name" 
                                    id="name" 
                                    className="form-name-control" 
                                    placeholder="Name"
                                    autoComplete="off"
                                    required>
                            </input>
                        </div>
                            <div>
                                <input type="email" 
                                        id="e-mail" 
                                        className="form-email-control" 
                                        placeholder="E-mail"
                                        autoComplete="off"
                                        required>
                                </input>
                            </div>
                                <div>
                                    <textarea type="message" 
                                                id="message" 
                                                className="form-message-control" 
                                                placeholder="Message"
                                                autoComplete="off"
                                                required>
                                    </textarea>
                                </div>
                                    <div>
                                        <button type="submit" 
                                                className="form-button">
                                                Send

                                        </button>
                                    </div>
                    </div>
                </>
        );
}

export default Form;