import React, { useState } from 'react';
import './Cpp.css';

function Cpp() {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="csharp-container-web">
            <h1>C++ Projects</h1>
            <div className="hLine"></div>
            <ul>
                {/* First Web Project with list and button */}
                <li className={`project-item-web ${expanded === 0 ? 'expanded' : ''}`}>
                    <div className="project-header-web" onClick={() => toggleExpand(0)}>
                        <span>Title</span>
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 0 && (
                        <div className="project-details-web">
                            <p>Subtitle</p>
                            {/* List details */}
                            <ul>
                                <li className="project-details-web-li-bold">Features:</li>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                            {/* <a
                                href="http://www.805dev.com"
                                className="project-link-button-web"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a> */}
                        </div>
                    )}
                </li>

                {/* Other Web Projects */}
                {/* <li className={`project-item-web ${expanded === 1 ? 'expanded' : ''}`}>
                    <div className="project-header-web" onClick={() => toggleExpand(1)}>
                        <span>UO Outlands Vendor Mall</span>
                        <div className="navbar-icon-container">
                            <img src="../images/nodejs.svg" alt="logo" className="navbar-icon" height="60px" />
                            <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                        </div>
                    </div>
                    {expanded === 1 && (
                        <div className="project-details-web">
                            <p>UOOutlands Vendor Mall Coming Soon</p>
                            <ul>
                                <li>Current version: 0.4a</li>
                                <li className="project-details-python-li-bold">Current Features:</li>
                                <li>OAuth2 with Discord</li>
                                <li>Advanced custom made parser for user uploads</li>
                                <li>Database upload using PostgreSQL and OAuth2</li>
                                <li>Backend created with Node.js</li>
                                <li className="project-details-python-li-bold">Work in Progress:</li>
                                <li>Retrieving from database and displaying results</li>
                            </ul>
                        </div>
                    )}
                </li> */}

                {/* <li className={`project-item-web ${expanded === 2 ? 'expanded' : ''}`}>
                    <div className="project-header-web" onClick={() => toggleExpand(2)}>
                        <span>Web Project 3 - Coming soon</span>
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 2 && (
                        <div className="project-details-web">
                            <p>Details about Web Project 3 coming soon.</p>
                        </div>
                    )}
                </li> */}
            </ul>
        </div>
    );
}

export default Cpp;
