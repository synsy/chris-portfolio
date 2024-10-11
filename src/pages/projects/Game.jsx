import React, { useState } from 'react';
import './Game.css';

function Game() {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="csharp-container-game">
            <h1>Game Projects</h1>
            <div className="hLine"></div>
            <ul>
                {/* Kinder Games Project */}
                <li className={`project-item-game ${expanded === 0 ? 'expanded' : ''}`}>
                    <div className="project-header-game" onClick={() => toggleExpand(0)}>
                        <span>Kinder Games</span>
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 0 && (
                        <div className="project-details-game">
                            <p>An educational game suite designed for kids K-2.</p>
                            {/* Adding a list element only to Kinder Games */}
                            <ul>
                                <li>Current version: 1.0b</li>
                                <li className="project-details-game-li-bold">Features:</li>
                                <li>Composition over Inheritance design.</li>
                                <li>2D gameplay utilizing Unity's UI Toolkit.</li>
                                <li className="project-details-game-li-bold">Work in Progress:</li>
                                <li>Debug responsive scaling.</li>
                                <li>Refining game audio.</li>
                                <li>Adding more games and features.</li>
                                <li>Implementing a reward system.</li>
                            </ul>
                            <a
                                href="https://play.unity.com/en/games/65a4b545-153f-44e5-b899-f5b2b0eba15f/webgl-builds"
                                className="project-link-button-game"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Play Kinder Games
                            </a>
                        </div>
                    )}
                </li>

                {/* Other Projects */}
                <li className={`project-item-game ${expanded === 1 ? 'expanded' : ''}`}>
                    <div className="project-header-game" onClick={() => toggleExpand(1)}>
                        <span>Galaxy Cab - Coming October 2024</span>
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 1 && (
                        <div className="project-details-game">
                            <p>A futuristic taxi game set in space. Coming soon in October 2024.</p>
                        </div>
                    )}
                </li>

                <li className={`project-item-game ${expanded === 2 ? 'expanded' : ''}`}>
                    <div className="project-header-game" onClick={() => toggleExpand(2)}>
                        <span>Ultimate RPG - Coming soon</span>
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 2 && (
                        <div className="project-details-game">
                            <p>An immersive RPG experience in the making. Stay tuned!</p>
                        </div>
                    )}
                </li>

                <li className={`project-item-game ${expanded === 3 ? 'expanded' : ''}`}>
                    <div className="project-header-game" onClick={() => toggleExpand(3)}>
                        <span>GameJam Contributions - Coming October 2024</span>
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                    </div>
                    {expanded === 3 && (
                        <div className="project-details-game">
                            <p>Various contributions to upcoming GameJams. Available October 2024.</p>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Game;
