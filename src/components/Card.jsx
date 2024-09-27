import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
    return (
        <div className="card">
            <img src={image} alt="Logo" className="card-image" />
            <div className="card-content">
                {/* <h3 className="card-title">{title}</h3> */}
                <p className="card-text">{description}</p>
                {/* <button className="card-button">Read More</button> */}
            </div>
        </div>
    );
}

export default Card;
