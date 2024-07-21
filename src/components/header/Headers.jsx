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
                        <button className="menu-button" onClick={toggleMenu}>Menu</button>
                        <div className={`links ${menuOpen ? 'show' : ''}`}>
                            <NavLink exact to='/' activeClassName="active">Home</NavLink>
                            <NavLink exact to='/projects' activeClassName="active">Projects</NavLink>
                            <NavLink exact to='/skills' activeClassName="active">About</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )     
}

export default Headers;