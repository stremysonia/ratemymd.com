import React from 'react';
import './Signin.css';


const Signin = () => {
    return (
        <>
            <div className="signin-form">
                <form className="sigin">
                    <h3 className="signin-title">Sign In</h3>
                    <div>
                        <input
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            name="email"
                            className="email-signin"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="text"
                            placeholder="Password"
                            name="password"
                            className="password-signin"
                        />
                    </div>
                    <div className="signin-forgot">Did you forget your<br/>
                        <a href="#" className="signin-forgot-username">username</a>or
                        <a href="#" className="signin-forgot-password">password</a>?
                    </div>
                    <div className="signin-noaccount">Don't have an account?
                        <a href="signup" className="signin-forgot-password">Sign up</a>
                    </div>
                    <div className="signin-button-container">
                        <button className="signup-button" type="button">Sign In</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signin