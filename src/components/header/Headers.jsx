import './../../App.css'
import '../header/headers.css'
import logo from './../../assets/images/v-logo.jpeg'
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Headers(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        // const aboutContainer = document.querySelector('.about-container');
        // const footer = document.querySelector('footer');
        // const project = document.querySelector('.underline');
        // if(aboutContainer){
        //     aboutContainer.classList.toggle('move');
        // }

        // if(footer){
        //     footer.classList.toggle('move');
        // }

        // if(project){
        //     project.classList.toggle('prjectmove');
        // }
    };


    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="logo" />
                    <div>
                        <div className="links">
                            <NavLink to='/' activeclassname="active">Home</NavLink>
                            <NavLink to='/projects' activeclassname="active">Projects</NavLink>
                            <NavLink to='/skills' activeclassname="active">Skills</NavLink>
                            <NavLink to='/About' activeclassname="active">About</NavLink>
                        </div>
                        <button className="menu-button" onClick={toggleMenu}>Menu</button>
                    </div>
                </nav>
            </header>
            <div className={`sidebar ${menuOpen ? 'showSidebar' : ''}`}>
                <NavLink to='/' activeclassname="active" onClick={toggleMenu}>Home</NavLink>
                <NavLink to='/projects' activeclassname="active" onClick={toggleMenu}>Projects</NavLink>
                <NavLink to='/skills' activeclassname="active" onClick={toggleMenu}>Skills</NavLink>
                <NavLink to='/About' activeclassname="active" onClick={toggleMenu}>About</NavLink>
            </div>
        </>
    )     
}

export default Headers;
