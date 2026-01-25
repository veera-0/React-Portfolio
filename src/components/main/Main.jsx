/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Modal from 'react-modal';
import resume from './../../assets/resume/Velpuri Anjaneyulu.pdf';
import './../../App.css';
import '../main/main.css';

Modal.setAppElement('#root');

function Main() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // Detect mobile screen
    const isMobile = window.innerWidth <= 768;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: isMobile ? '15px' : '20px',
            maxWidth: isMobile ? '95vw' : '1000px',
            width: isMobile ? '95vw' : '95%',
            maxHeight: isMobile ? '85vh' : '90vh',
            height: 'auto',
            overflow: 'auto',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
        }
    };

    return (
        <section id="hero">
            <div className='hero-content'>
                <h1 className='animated-name'>
                    Hi, I am <br />
                    <span className='name-highlight'>Veera Anjaneyulu </span>
                </h1>
                <p className='hero-description'>
                    I'm a software developer, enthusiastic in learning new skills, expanding my knowledge and leverage my learnings.
                </p>
                <div className="resume-buttons">
                    <button className="button" onClick={openModal}>Preview Resume</button>
                    <a href={resume} download="Velpuri Anjaneyulu Resume">
                        <button className="button">Download Resume</button>
                    </a>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Resume Preview"
            >
                <div className="modal-header">
                    <h2>Resume Preview</h2>
                    <button onClick={closeModal} className="close-button">&times;</button>
                </div>
                <div className="resume-preview">
                    <img
                        src="https://veera-verse.netlify.app/images/resume_pic-optimized.webp"
                        alt="Resume Preview"
                        style={{
                            maxWidth: '100%',
                            maxHeight: isMobile ? 'calc(85vh - 80px)' : 'calc(90vh - 100px)',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </Modal>
        </section>
    )
}

export default Main;
