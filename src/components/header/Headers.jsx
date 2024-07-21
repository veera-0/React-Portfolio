import './../../App.css'
import logo from './../../assets/images/v-logo.jpeg'
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
                    <img src={logo} alt="logo" />
                    <div>
                        <div className={`links ${menuOpen ? 'show' : ''}`}>
                            <NavLink to='/' activeClassName="active">Home</NavLink>
                            <NavLink to='/projects' activeClassName="active">Projects</NavLink>
                            <NavLink to='/skills' activeClassName="active">About</NavLink>
                        </div>
                        <button className="menu-button" onClick={toggleMenu}>Menu</button>
                    </div>
                </nav>
            </header>
        </>
    )     
}

export default Headers;