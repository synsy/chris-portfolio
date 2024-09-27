import React from 'react';
import './Contact.css'; // Optional: Import a CSS file for styling

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to connect, feel free to reach out!</p>
            <div className="hLine"></div>
            <div className="contact-methods">
                <a href="mailto:codell88@gmail.com" className="contact-link">
                    <img src="../images/email.webp" alt="Email" className="contact-icon" />
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/codell88" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <img src="../images/linkedin.webp" alt="LinkedIn" className="contact-icon" />
                    Connect on LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Contact;