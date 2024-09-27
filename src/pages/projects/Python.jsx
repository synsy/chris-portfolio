import React from 'react';
import './Python.css';

function Python() {
    return (
        <div className="csharp-container">
            <h1>Python Projects</h1>
            <div className="hLine"></div>
            <ul>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/python.png" alt="logo" className="navbar-icon" height="60px" />
                        Python Project 1 - Coming soon.
                    </a>
                </li>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/python.png" alt="logo" className="navbar-icon" height="60px" />
                        Python Project 2 - Coming soon.
                    </a>
                </li>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/python.png" alt="logo" className="navbar-icon" height="60px" />
                        Python Project 3 - Coming soon.
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Python;
