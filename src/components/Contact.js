import React, { Component } from 'react';
import '../contact.css'


class Contact extends Component {
    render() {
        return (
        <div>
            <div className="form-container">
                <form>
                    <label>Name:</label>
                    <input className="contact-input" type="text"/>
                    <label>Email Address:</label>
                    <input className="contact-input" type="text" />
                    <label>Content:</label>
                    <textarea className="contact-input"></textarea>
                </form>
            </div>
        </div>
        )
    }
}

export default Contact;