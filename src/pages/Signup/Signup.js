import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <>
            <div className="signup-form">
                <form className="signup">
                    <h3 className="signup-title">Sign Up</h3>
                    <div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="name-signup"
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            name="email"
                            className="email-signup"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="text"
                            placeholder="Password"
                            name="password"
                            className="password-signup"
                        />
                    </div>
                    <div onload="disableSubmit()" className="terms-condtion-container">
                        <input onChange="activateButton(this)"
                            type="checkbox"
                            className="input-box"
                            id="input-box"
                            name="input-box"
                        />
                    
                        <label className="input-terms" for="input-terms">
                            By Creating An Account You <br/>Agree to Our
                            <a className="terms-privacy" href="#">Terms and Privacy.</a>
                        </label>
                    </div>
                    <div className="signup-button-container">
                        <button className="signup-button" type="button">Sign Up</button>
                    </div>
                </form>
                <form className="signin-form">
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
                    <label>
                        <a href="#" className="signin-forgot-password">Forgot Your Password?</a>
                    </label>
                    <div>
                        <button className="signup-button" type="button">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup