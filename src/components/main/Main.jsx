/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Modal from 'react-modal';
import work from './../../assets/images/work.jpeg';
import resumeImage from './../../assets/resume/resume_pic.png';
import './../../App.css';
import '../main/main.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

function Main() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            maxWidth: '1000px', // Increased maxWidth
            width: '95%',
            height: '90vh', // Set specific height
            overflow: 'hidden', // Changed to hidden
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
    
    return(
        <section id="hero">
            <div className='hero-content'>
                <h1 className='animated-name'>
                    Hi, I am <br/> 
                    <span className='name-highlight'>Veera Anjaneyulu </span>
                </h1>
                <p className='hero-description'>
                    I'm a software developer, enthusiastic in learning new skills, expanding my knowledge and leverage my learnings.
                </p>
                <div className="resume-buttons">
                    <button className="button" onClick={openModal}>Preview Resume</button>
                    <a href={resumeImage} download="Velpuri Anjaneyulu Resume">
                        <button className="button">Download Resume</button>
                    </a>
                </div>
            </div>
            <img src={work} alt='image' loading='eager' />

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
                        src={resumeImage} 
                        alt="Resume Preview" 
                        style={{
                            width: 'auto',
                            height: 'calc(90vh - 100px)', // Subtract header height
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