import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'
import avatar from '../../assets/avatar.png'

class Login extends Component {
render () {
    return (
        <form 
            className=""
            onSubmit={(e) => this.formSubmit(e)}
            method="POST">
                    <div className="">
                        <span className="">
                            
                        </span>
                        <div>
                            <input
                                id="name" 
                                type="text" 
                                placeholder="Name"
                                className="" 
                                autoComplete="off"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value})}
                                name="name" 
                                required
                            />
                        </div>
                        <div>
                            <input
                                id="email" 
                                type="email" 
                                placeholder="Email"
                                className="" 
                                autoComplete="off"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value})}
                                name="email" 
                                required
                            />
                        </div>
                        <div>
                            <input
                                id="numbers" 
                                type="numbers" 
                                placeholder="Phone Number"
                                className="" 
                                autoComplete="off"
                                value={this.state.phone}
                                onChange={(e) => this.setState({ phone: e.target.value})}
                                name="phone" 
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                id="message" 
                                type="text" 
                                placeholder="How Can We Help?"
                                className="" 
                                autoComplete="off"
                                value={this.state.message}
                                onChange={(e) => this.setState({ message: e.target.value})}
                                name="message" 
                                required
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="">
                                {this.state.buttonText}
                            </button>
                        </div>
                    </div>
        </form>
    )
}
}

export default Login;














// const Login = () => {
//             return (
//                 <> 
//                     <div className="login-container">
//                         <img src={avatar.png} className="avatar"></img>
//                             <h1>Login Here</h1>
//                                 <form>
//                                     <p>Username</p>
//                                         <input type="password" name="" placeholder="Enter Username"></input>
//                                             <p>Password</p>
//                                                 <input type="password" name="" placeholder="Enter Password"></input>
//                                                     <input type="submit" name="" value="Login"></input>
//                                                         <a href="#">Lost Your Password?</a><br></br>
//                                                             <a href="#">Don't Have Your Account?</a>
//                                 </form>
//                     </div>
//                 </>
//             )
// }

// export default Login;