import React, { Component } from 'react'
import './Form.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xqkgnreg"
        method="POST"
        className="contact-form"
      >
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
                name="message" 
                required
            />
        </div>
        {status === "SUCCESS" ? 
        <p className="submit-message">Thanks!</p> : 
          <div className="button-container">
            <button className="button-contact-form">Submit
            </button>
          </div>}
        {status === "ERROR" && 
          <p className="error-message">Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}



























































// class Form extends Component {
//             state = {
//                 name: '',
//                 email: '',
//                 phone: '',
//                 subject: '',
//                 sent: false,
//                 buttonText: 'Submit',
//             }

//             formSubmit = (e) => {
//             e.preventDefault()

//             this.setState({
//                 buttonText: '...Sending',
//             })

//             let data ={
//                 name: this.state.name,
//                 email: this.state.email,
//                 phone: this.state.phone,
//                 subject: this.state.subject,
//                 message: this.state.message,
//             }

//             axios
//                 .post()
//                 .then((res) => {
//                     this.setState({ sent: true }, this.restForm())
//                 })
//                 .catch(() => {
//                     console.log('Message Not Sent')
//                 })
//             }

//             restForm = () => {
//                 this.setState({
//                     name: '',
//                     email: '',
//                     phone: '',
//                     subject: '',
//                     message: '',
//                     buttonText: 'Message Sent',
//                 })
//             }

//         render () {
//             return (
//                 <form 
//                     className="contact-form"
//                     onSubmit={(e) => this.formSubmit(e)}
//                     method="POST">
//                             <div className="form-container">
//                                 <span className="form-header">
//                                     <p className="contact">Contact Us</p>
//                                     <p className="contact">4398 Harter Street</p>
//                                     <p className="contact">Miami, Florida 33801</p>
//                                     <p className="contact">(937) 575 - 8211</p>
//                                 </span>
                                // <div>
                                //     <input
                                //         id="name" 
                                //         type="text" 
                                //         placeholder="Name"
                                //         className="name-contact-form input-group" 
                                //         autoComplete="off"
                                //         value={this.state.name}
                                //         onChange={(e) => this.setState({ name: e.target.value})}
                                //         name="name" 
                                //         required
                                //     />
                                // </div>
                                // <div>
                                //     <input
                                //         id="email" 
                                //         type="email" 
                                //         placeholder="Email"
                                //         className="email-contact-form" 
                                //         autoComplete="off"
                                //         value={this.state.email}
                                //         onChange={(e) => this.setState({ email: e.target.value})}
                                //         name="email" 
                                //         required
                                //     />
                                // </div>
                                // <div>
                                //     <input
                                //         id="numbers" 
                                //         type="numbers" 
                                //         placeholder="Phone Number"
                                //         className="phonenumber-contact-form" 
                                //         autoComplete="off"
                                //         value={this.state.phone}
                                //         onChange={(e) => this.setState({ phone: e.target.value})}
                                //         name="phone" 
                                //         required
                                //     />
                                // </div>
                                // <div>
                                //     <textarea
                                //         id="message" 
                                //         type="text" 
                                //         placeholder="How Can We Help?"
                                //         className="message-contact-form" 
                                //         autoComplete="off"
                                //         value={this.state.message}
                                //         onChange={(e) => this.setState({ message: e.target.value})}
                                //         name="message" 
                                //         required
                                //     />
                                // </div>
                //                 <div className="button-container">
                //                     <button type="submit" className="button-contact-form">
                //                         {this.state.buttonText}
                //                     </button>
                //                 </div>
                //             </div>
                // </form>
//             )
//         }
// }

