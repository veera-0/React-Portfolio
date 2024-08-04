/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaPython, FaAws } from 'react-icons/fa';
import { SiC, SiCplusplus } from 'react-icons/si'

function Skills() {
    return (
        <div className="about-container">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <FaHtml5 className="skill-icon" />
                    <h3>HTML</h3>
                </div>
                <div className="skill-card">
                    <FaCss3Alt className="skill-icon" />
                    <h3>CSS</h3>
                </div>
                <div className="skill-card">
                    <FaJs className="skill-icon" />
                    <h3>JavaScript</h3>
                </div>
                <div className="skill-card">
                    <FaReact className="skill-icon" />
                    <h3>React.js</h3>
                </div>
                <div className="skill-card">
                    <FaJava className="skill-icon" />
                    <h3>Spring Boot</h3>
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
                    <SiC className="skill-icon" />
                    <h3>C Programming</h3>
                </div>
                <div className="skill-card">
                    <SiCplusplus className="skill-icon" />
                    <h3>C++ Programming</h3>
                </div>
                <div className="skill-card">
                    <FaJava className="skill-icon" />
                    <h3>C++</h3>
                </div>
            </div>
        </div>
    );
}

export default Skills;
