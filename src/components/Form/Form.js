import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

class Form extends Component {
            state = {
                name: '',
                email: '',
                phone: '',
                subject: '',
                sent: false,
                buttonText: 'Submit',
            }

            formSubmit = (e) => {
            e.preventDefault()

            this.setState({
                buttonText: '...Sending',
            })

            let data ={
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                subject: this.state.subject,
                message: this.state.message,
            }

            axios
                .post()
                .then((res) => {
                    this.setState({ sent: true }, this.restForm())
                })
                .catch(() => {
                    console.log('Message Not Sent')
                })
            }

            restForm = () => {
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    buttonText: 'Message Sent',
                })
            }

        render () {
            return (
                <form 
                    className="contact-form"
                    onSubmit={(e) => this.formSubmit(e)}
                    method="POST">
                            <div className="form-container">
                                <span className="form-header">
                                    <p className="contact">Contact Us</p>
                                    <p className="contact">4398 Harter Street</p>
                                    <p className="contact">Miami, Florida 33801</p>
                                    <p className="contact">(937) 575 - 8211</p>
                                </span>
                                <div>
                                    <input
                                        id="name" 
                                        type="text" 
                                        placeholder="Name"
                                        className="name-contact-form input-group" 
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
                                        className="email-contact-form" 
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
                                        className="phonenumber-contact-form" 
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
                                        className="message-contact-form" 
                                        autoComplete="off"
                                        value={this.state.message}
                                        onChange={(e) => this.setState({ message: e.target.value})}
                                        name="message" 
                                        required
                                    />
                                </div>
                                <div className="button-container">
                                    <button type="submit" className="button-contact-form">
                                        {this.state.buttonText}
                                    </button>
                                </div>
                            </div>
                </form>
            )
        }
}

export default Form;