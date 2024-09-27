import React from 'react';
import './Web.css';

function Web() {
    return (
        <div className="csharp-container">
            <h1>Web-based Projects</h1>
            <div className="hLine"></div>
            <ul>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                        Web Project 1 - Coming soon.
                    </a>
                </li>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                        Web Project 2 - Coming soon.
                    </a>
                </li>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                        Web Project 3 - Coming soon.
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Web;
