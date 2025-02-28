import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      {/* PDF Download Button */}
      <div className="resumeButton-container">
        <a href="/ChrisODellResume.pdf" download className="resumeButton">
          Download Resume
        </a>
      </div>
      
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <h3>Southern New Hampshire University</h3>
          <p>Bachelor of Science in Computer Science (Expected 2025)</p>
        </div>
        <div className="resume-item">
          <h3>San Jose State University</h3>
          <p>Management Information Systems (2007-2010)</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="resume-item">
          <h3>California Department of Corrections and Rehabilitation</h3>
          <p>Correctional Sergeant (2021 - Present)</p>
        </div>
        <div className="resume-item">
          <h3>California Department of Corrections and Rehabilitation</h3>
          <p>Correctional Officer (2016 - 2021)</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Communication</li>
          <li>Problem-solving and Critical Thinking</li>
          <li>Leadership and Team Management</li>
          <li>C#</li>
          <li>C++</li>
          <li>Python</li>
          <li>JavaScript / React</li>
          <li>HTML / CSS</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-item">
          <a href="http://www.805dev.com/" target="_blank"><h3> 805 Dev</h3>
          <p>Responsive website designed with React for a web development business.</p></a>
        </div>
        <div className="resume-item">
          <a href="https://github.com/synsy/EagleJam" target="_blank"><h3>Death Flight</h3>
          <p>Programmer in a team of 4 for an itch.io GameJam hosted by UC Berkeley. The GameJam was a 48 hour time-frame and required communication,
          organization, and teamwork to accomplish in a short period of time with team members located in different parts of the world.</p>
          <p>🏆Placed 2nd overall.</p></a>
        </div>
        <div className="resume-item">
          <a href="https://github.com/synsy/GraveyardJam" target="_blank"><h3>Graveyard Shift</h3>
          <p>Lead programmer in a team of 3 for an itch.io GameJam. The GameJam was a one week time-frame and required communication,
          organization, and teamwork to accomplish in a short period of time with team members located in different parts of the world.</p></a>
        </div>
      </section>
    </div>
    
  );
  
}

export default Resume;
