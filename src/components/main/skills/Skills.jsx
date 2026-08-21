/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase, FaPython, FaAws, FaGitAlt, FaAngular, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiC, SiCplusplus, SiSpringboot, SiGooglecloud } from 'react-icons/si'

function Skills() {
    return (
        <div className="about-container">
            <h2 style={{color:'green'}}>Skills</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <FaJava className="skill-icon" />
                    <h3>Java</h3>
                </div>
                <div className="skill-card">
                    <SiSpringboot className="skill-icon" />
                    <h3>Spring Boot</h3>
                </div>
                <div className="skill-card">
                    <FaReact className="skill-icon" />
                    <h3>React.js</h3>
                </div>
                <div className="skill-card">
                    <FaDatabase className="skill-icon" />
                    <h3>MySQL</h3>
                </div>
                <div className="skill-card">
                    <FaPython className="skill-icon" />
                    <h3>Python</h3>
                </div>
                <div className="skill-card">
                    <FaAws className="skill-icon" />
                    <h3>AWS</h3>
                </div>
                <div className="skill-card">
                    <SiGooglecloud className="skill-icon" />
                    <h3>Google Cloud for AI</h3>
                </div>
                <div className="skill-card">
                    <FaGitAlt className="skill-icon" />
                    <h3>GIT</h3>
                </div>
                <div className="skill-card">
                    <FaGithub className="skill-icon" />
                    <h3>GitHub</h3>
                </div>
                <div className="skill-card">
                    <FaGitlab className="skill-icon" />
                    <h3>GitLab</h3>
                </div>
                <div className="skill-card">
                    <FaAngular className="skill-icon" />
                    <h3>Angular.js</h3>
                </div>
                <div className="skill-card">
                    <SiC className="skill-icon" />
                    <h3>C Programming</h3>
                </div>
                <div className="skill-card">
                    <SiCplusplus className="skill-icon" />
                    <h3>C++ Programming</h3>
                </div>
                <div className="skill-card">
                    <FaHtml5 className="skill-icon" />
                    <h3>HTML</h3>
                </div>
                <div className="skill-card">
                    <FaCss3Alt className="skill-icon" />
                    <h3>CSS</h3>
                </div>
            </div>
        </div>
    );
}

export default Skills;
