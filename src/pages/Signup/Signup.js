import React from 'react';
import './Signup.css'
// import avatar from '../../assets/avatar.png'

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
                            By Clicking the "Sign Up" button, you are creating a<br/>
                            Ratemymd account, and you are agreeing to Ratemymd's<br/>
                            <a className="terms-privacy" href="#">Terms and Conditions of Use</a>and
                            <a className="terms-privacy" href="#">Privacy Policy.</a>
                        </label>
                        <div className="signin-account">Do you already have an account?
                            <a className="signin" href="signin">Sign In</a>
                        </div>
                    </div>
                    <div className="signup-button-container">
                        <button className="signup-button" type="button">Sign Up</button>
                    </div>
                    {/* <div className="signin">Already have an account?<a href="#">Sign In</a></div> */}
                </form>
                {/* <form className="signin-form">
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
                </form> */}
            </div>
        </>
    );
}

export default Signup