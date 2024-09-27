import React from 'react';
import './Game.css';

function Game() {
    return (
        <div className="csharp-container">
            <h1>Game Projects</h1>
            <div className="hLine"></div>
            <ul>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                        Game Project 1 - Coming soon.
                    </a>
                </li>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                        Game Project 2 - Coming soon.
                    </a>
                </li>
                <li>
                    <a href="#" className="project-link">
                        <img src="../images/unity.png" alt="logo" className="navbar-icon" height="60px" />
                        Game Project 3 - Coming soon.
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Game;
