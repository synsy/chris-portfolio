import React, { useState } from 'react';
import './Web.css';

function Web() {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="csharp-container-web">
            <h1>Web-based Projects</h1>
            <div className="hLine"></div>
            <ul>
                {/* First Web Project with list and button */}
                <li className={`project-item-web ${expanded === 0 ? 'expanded' : ''}`}>
                    <div className="project-header-web" onClick={() => toggleExpand(0)}>
                        <span>805 Web Development</span>
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 0 && (
                        <div className="project-details-web">
                            <p>Web Development Business Site</p>
                            {/* List details similar to Kinder Games */}
                            <ul>
                                <li className="project-details-web-li-bold">Features:</li>
                                <li>Made with React</li>
                                <li>Modern responsive design</li>
                                <li>Formik Integration</li>
                                <li className="project-details-web-li-bold">Work in Progress:</li>
                                <li>Improved SEO</li>
                            </ul>
                            <a
                                href="http://www.805dev.com"
                                className="project-link-button-web"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    )}
                </li>

                {/* Other Web Projects */}
                <li className={`project-item-web ${expanded === 1 ? 'expanded' : ''}`}>
                    <div className="project-header-web" onClick={() => toggleExpand(1)}>
                        <span>Web Project 2 - Coming soon</span>
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 1 && (
                        <div className="project-details-web">
                            <p>Details about Web Project 2 coming soon.</p>
                        </div>
                    )}
                </li>

                <li className={`project-item-web ${expanded === 2 ? 'expanded' : ''}`}>
                    <div className="project-header-web" onClick={() => toggleExpand(2)}>
                        <span>Web Project 3 - Coming soon</span>
                        <img src="../images/web.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 2 && (
                        <div className="project-details-web">
                            <p>Details about Web Project 3 coming soon.</p>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Web;
