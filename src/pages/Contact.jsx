import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to connect, feel free to reach out!</p>
            <div className="hLine"></div>
            <div className="contact-methods">
                <a href="mailto:codell88@gmail.com" className="contact-link" data-hover="codell88@gmail.com">
                    <img src="../images/email.png" alt="Email" className="contact-icon" />
                    <span className="link-text">Email Me</span>
                </a>
                <a href="https://www.linkedin.com/in/codell88" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <img src="../images/linkedin.png" alt="LinkedIn" className="contact-icon" />
                    Connect on LinkedIn
                </a>
                <a href="https://github.com/synsy/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <img src="../images/github.png" alt="Github" className="contact-icon" />
                    View my Github
                </a>
            </div>
        </div>
    );
}

export default Contact;
