/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import resumeImage from './../../assets/resume/resume_pic.png';
import resume from './../../assets/resume/Velpuri Anjaneyulu.pdf';

import './../../App.css';
import '../main/main.css';

Modal.setAppElement('#root');

function Main() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const textsToType = ["Software Development Engineer", "Full Stack Developer", "Problem Solver"];
    
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    
    useEffect(() => {
        let mounted = true;
        let currentText = textsToType[currentTextIndex];
        let currentChar = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        const typeText = () => {
            if (!mounted) return;

            try {
                if (!isDeleting && currentChar <= currentText.length) {
                    setTypedText(currentText.slice(0, currentChar));
                    currentChar++;
                    typingSpeed = 100;
                } else if (isDeleting && currentChar >= 0) {
                    setTypedText(currentText.slice(0, currentChar));
                    currentChar--;
                    typingSpeed = 50;
                }

                if (currentChar > currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // Pause before deleting
                }

                if (currentChar < 0) {
                    isDeleting = false;
                    currentChar = 0;
                    setCurrentTextIndex((prev) => (prev + 1) % textsToType.length);
                    currentText = textsToType[(currentTextIndex + 1) % textsToType.length];
                }

                setTimeout(typeText, typingSpeed);
            } catch (error) {
                console.error('Error in typewriter effect:', error);
            }
        };

        const typingTimer = setTimeout(typeText, 1000);
        
        return () => {
            mounted = false;
            clearTimeout(typingTimer);
        };
    }, [currentTextIndex, textsToType]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(23, 23, 23, 0.98)',
            padding: '20px',
            maxWidth: '1000px',
            width: '95%',
            height: '90vh',
            overflow: 'hidden',
            borderRadius: '15px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000
        }
    };
    
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            width: '100vw',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at 20% 20%, #1e3c72 0%, #2a5298 60%, #232526 100%)',
        }}>
            {/* Layered floating shapes for depth */}
            <div style={{
                position: 'absolute',
                top: '-100px', left: '-100px',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, #64b5f6 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, opacity: 0.5
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-120px', right: '-120px',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, #43e97b 0%, transparent 70%)',
                filter: 'blur(80px)', zIndex: 0, opacity: 0.4
            }} />
            <div style={{
                position: 'absolute',
                top: '40%', left: '60%',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle, #fbbc05 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, opacity: 0.3
            }} />
            <div style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8vh 2vw 0 2vw',
            }}>
                <div style={{textAlign: 'center', width: '100%'}}>
                    <div className="greeting" style={{fontSize: '1.7rem', color: '#b3c0d1', marginBottom: 12, fontWeight: 500}}>
                        <span className="wave" style={{fontSize: '2.2rem', marginRight: 10}}>👋</span> Hello, I am
                    </div>
                    <h1 className='name' style={{
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        fontWeight: 900,
                        margin: '1.2rem 0',
                        background: 'linear-gradient(90deg, #64b5f6, #43e97b, #fbbc05, #ea4335)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        letterSpacing: 2,
                        lineHeight: 1.05,
                        textShadow: '0 4px 32px rgba(100,181,246,0.10)'
                    }}>
                        Veera Anjaneyulu
                    </h1>
                    <div className="type-writer" style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        color: '#43e97b',
                        margin: '1.5rem 0',
                        minHeight: 48,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textShadow: '0 2px 8px rgba(67,233,123,0.08)'
                    }}>
                        <span className="typed-text">{typedText}</span>
                        <span className="cursor" style={{
                            display: 'inline-block',
                            width: 4, height: '1.2em', background: '#43e97b', marginLeft: 7,
                            animation: 'blink 1s infinite'
                        }}></span>
                    </div>
                    <p className="bio" style={{
                        color: '#e0e6ed',
                        fontSize: '1.25rem',
                        margin: '2.5rem 0 2rem 0',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        textShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}>
                        Passionate about creating innovative solutions and turning complex problems into elegant, efficient, and scalable applications.<br/>
                        Specialized in full-stack development with a focus on user experience and performance.
                    </p>
                    <div className="cta-container" style={{marginTop: 40}}>
                        <div className="resume-buttons" style={{display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap'}}>
                            <button className="cta-button primary" onClick={openModal} style={{
                                background: 'linear-gradient(90deg, #64b5f6, #43e97b)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 10,
                                padding: '1rem 2.5rem',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                boxShadow: '0 2px 12px rgba(100,181,246,0.15)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                            }}>
                                <span className="button-content" style={{display: 'flex', alignItems: 'center', gap: 10}}>
                                    <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="24" height="24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Preview Resume
                                </span>
                            </button>
                            <a href={resume} download="Velpuri Anjaneyulu Resume" className="cta-button secondary" style={{
                                background: 'rgba(255,255,255,0.10)',
                                color: '#fff',
                                border: '1.5px solid #64b5f6',
                                borderRadius: 10,
                                padding: '1rem 2.5rem',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                boxShadow: '0 2px 12px rgba(100,181,246,0.10)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                textDecoration: 'none',
                                display: 'flex', alignItems: 'center', gap: 10
                            }}>
                                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="24" height="24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                        <div className="social-links" style={{display: 'flex', gap: 20, justifyContent: 'center', marginTop: 32}}>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                                width: 52, height: 52, borderRadius: '50%', background: 'rgba(100,181,246,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 26, transition: 'all 0.2s', border: '1.5px solid #64b5f6'
                            }}>
                                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link" style={{
                                width: 52, height: 52, borderRadius: '50%', background: 'rgba(67,233,123,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 26, transition: 'all 0.2s', border: '1.5px solid #43e97b'
                            }}>
                                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Resume Preview"
                ariaHideApp={false}
            >
                <div className="modal-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(30,44,73,0.95)', color: '#fff'}}>
                    <h2 style={{fontWeight: 700, fontSize: '1.3rem'}}>Resume Preview</h2>
                    <button 
                        onClick={closeModal} 
                        className="close-button"
                        aria-label="Close modal"
                        style={{background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', padding: 5, transition: 'all 0.3s'}}>
                        &times;
                    </button>
                </div>
                <div className="resume-preview" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90vh - 100px)'}}>
                    <img 
                        src={resumeImage} 
                        alt="Resume Preview" 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            borderRadius: 12,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.18)'
                        }}
                        loading="lazy"
                    />
                </div>
            </Modal>
        </section>
    );
}

export default Main;
