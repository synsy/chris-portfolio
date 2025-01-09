import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import './Projects.css';

function Projects() {
    const categories = [
        { name: 'Web', description: 'Web-based projects', path: '/web', image: "/images/web.png" },
        { name: 'Python', description: 'Python scripts and applications', path: '/python', image: "/images/python.png" },
        { name: 'C++', description: 'C++ projects', path: '/cpp', image: "/images/cpp.png" },
        { name: 'Game', description: 'Game development projects', path: '/game', image: "/images/unity.png" }
    ];

    return (
        <div className="projects-container">
            {categories.map((category, index) => (
                <Link key={index} to={category.path} style={{ textDecoration: 'none' }}>
                    <Card 
                        title={category.name} 
                        description={category.description}
                        image={category.image}
                    />
                </Link>
            ))}
        </div>
    );
}

export default Projects;
