import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './About.css'

function About() {
  

  const [skillLevels] = useState({
    CSharp: 85,
    Python: 80,
    Java: 70,
    HTML: 90,
    CSS: 85,
    JavaScript: 75,
    React: 70,
    SQL: 70,
    Git: 60,
    Unity: 80,
    Godot: 50,
    UE5: 40,
  });
  return (
    <>
      <div className="aboutWrapper">
        <div className="aboutContainer" id="aboutFirstSection">
          <div className="aboutContainer" id="aboutFirst">
            <p>Hi, my name is</p>
          </div>
          <div className="aboutContainer" id="aboutSecond">
            <h1>Christopher O'Dell</h1>
            <p>Software Engineer</p>
          </div>
          <div className="aboutContainer" id="aboutThird">
            <h2>I am a Software Engineer</h2>
          </div>
          <div className="aboutContainer" id="aboutFourth">
            <p>I am a Computer Science student with a concentration in Software Engineering. I have a passion for building exciting software such as video games, websites, and webapps. </p>
            <p>student at Southern New Hampshire University. I have a passion for building exciting software for the web, mobile, and desktop. I love developing in C# and learning new languages, frameworks, and devlopment environments to broaden my skillset.</p>
          </div>
          <div className="aboutContainer" id="aboutFifth">
            <NavLink to="/projects" className="nav-links" activeClassName="active">
              <h3 className="aboutProjectButton">Check out my Projects!</h3>
            </NavLink>
          </div>
        </div>
        <div className="hLine"></div>
        <div className="aboutContainer" id="aboutSixth">
        
        </div>
        <div className="aboutContainer" id="aboutSeventh">
          <h1>Education</h1>
          <p>Southern New Hampshire University</p>
          <p>Major: Computer Science</p>
          <p>Concentration: Software Engineering</p>
          <p>Current GPA: 4.0</p>
          <p>Expected Graduation: September 2025</p>
        </div>
        <div className="hLine"></div>
        <div className="aboutContainer" id="aboutEighth">
          <h1>Skills</h1>
          <div className="skillsContainer">
            <div className="skill">
              <p className="skillName">C#</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.CSharp}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Python</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.Python}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Java</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.Java}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">HTML</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.HTML}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">CSS</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.CSS}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">JavaScript</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.JavaScript}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">React</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.React}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">SQL</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.SQL}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Git</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.Git}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Unity</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.Unity}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">Godot</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.Godot}%` }}></div>
              </div>
            </div>
            <div className="skill">
              <p className="skillName">UE5</p>
              <div className="skillsBar">
                <div className="skillsBarFill" style={{ width: `${skillLevels.UE5}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About