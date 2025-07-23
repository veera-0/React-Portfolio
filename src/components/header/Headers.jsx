import './../../App.css'
import '../header/headers.css'
import logo from './../../assets/images/v-logo.jpeg'
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Headers(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    /* Photo by <a href="https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Markus Spiske</a> on <a href="https://unsplash.com/photos/turned-on-laptop-on-table-uPXs5Vx5bIg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
     
    Photo by Kennst du schon die Umkreisel App?  : https://www.pexels.com/photo/blue-universe-956981/

    Image by <a href="https://pixabay.com/users/thedigitalartist-202249/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3497260">Pete Linforth</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3497260">Pixabay</a>
    */
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="v logo" loading='lazy'/>
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
