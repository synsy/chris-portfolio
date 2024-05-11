import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MyLogo
                </Link>
                <ul className="nav-menu">
                    <li classNae="nav-item">
                        <Link to ="/" className="nav-links">
                            About
                        </Link>
                        <li classNae="nav-item">
                        <Link to ="/" className="nav-links">
                            Projects
                        </Link>
                        <li classNae="nav-item">
                        <Link to ="/" className="nav-links">
                            Contact
                        </Link>
                    </li>
                    </li>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar