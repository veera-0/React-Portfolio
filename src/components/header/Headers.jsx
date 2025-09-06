import './../../App.css'
import '../header/headers.css'
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Headers(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return(
        <>
            <header>
                <nav>
                    <img src="https://veera-verse.netlify.app/images/v-logo.webp" alt="v logo" loading='lazy'/>
                    <div>
                        <div className="links">
                            <NavLink to='/' activeclassname="active">Home</NavLink>
                            <NavLink to='/projects' activeclassname="active">Projects</NavLink>
                            <NavLink to='/skills' activeclassname="active">Skills</NavLink>
                            <NavLink to='/About' activeclassname="active">About</NavLink>
                            <NavLink to='/Badges' activeclassname="active">Badges</NavLink>
                        </div>
                        <button type="button" 
                                aria-expanded={menuOpen} 
                                className="menu-button" 
                                onClick={toggleMenu}>
                                    Menu
                        </button>
                    </div>
                </nav>
            </header>
            <div className={`sidebar ${menuOpen ? 'showSidebar' : ''}`}>
                <NavLink to='/' activeclassname="active" onClick={toggleMenu}>Home</NavLink>
                <NavLink to='/projects' activeclassname="active" onClick={toggleMenu}>Projects</NavLink>
                <NavLink to='/skills' activeclassname="active" onClick={toggleMenu}>Skills</NavLink>
                <NavLink to='/About' activeclassname="active" onClick={toggleMenu}>About</NavLink>
                <NavLink to='/Badges' activeclassname="active" onClick={toggleMenu}>Badges</NavLink>
            </div>
        </>
    )     
}

export default Headers;
