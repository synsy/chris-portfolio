import React, { useState } from 'react';
import './Python.css';

function Python() {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="csharp-container-python">
            <h1>Python Projects</h1>
            <div className="hLine"></div>
            <ul>
                {/* Python Project 1 */}
                <li className={`project-item-python ${expanded === 0 ? 'expanded' : ''}`}>
                    <div className="project-header-python" onClick={() => toggleExpand(0)}>
                        <span>Ultima Online Outlands Vendor Mall</span>
                        <img src="../images/python.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 0 && (
                        <div className="project-details-python">
                            <p>UOOutlands Vendor Mall Coming Soon</p>
                            <ul>
                                <li>Current version: 0.4a</li>
                                <li className="project-details-python-li-bold">Current Features:</li>
                                <li>OAuth2 with Discord</li>
                                <li>Advanced custom made parser for user uploads</li>
                                <li>Database upload using PostgreSQL and OAuth2</li>
                                <li>Backend created with Python</li>
                                <li className="project-details-python-li-bold">Work in Progress:</li>
                                <li>Retrieving from database and displaying results</li>
                            </ul>
                            {/* <a
                                href="#"
                                className="project-link-button-python"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More
                            </a> */}
                        </div>
                    )}
                </li>

                {/* Python Project 2 */}
                <li className={`project-item-python ${expanded === 1 ? 'expanded' : ''}`}>
                    <div className="project-header-python" onClick={() => toggleExpand(1)}>
                        <span>Python Project 2 - Coming Soon</span>
                        <img src="../images/python.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 1 && (
                        <div className="project-details-python">
                            <p>Details about Python Project 2 coming soon.</p>
                        </div>
                    )}
                </li>

                {/* Python Project 3 */}
                <li className={`project-item-python ${expanded === 2 ? 'expanded' : ''}`}>
                    <div className="project-header-python" onClick={() => toggleExpand(2)}>
                        <span>Python Project 3 - Coming Soon</span>
                        <img src="../images/python.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 2 && (
                        <div className="project-details-python">
                            <p>Details about Python Project 3 coming soon.</p>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Python;
