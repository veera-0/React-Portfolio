import './../../App.css'
import logo from './../../assets/images/v-logo.jpeg'
import { NavLink } from "react-router-dom";
import {Component} from 'react'

class Headers extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <header>
                    <nav>
                    <img src={logo} alt="logo" />
                        <div className='links'>
                            <NavLink exact to='/' activeClassName="active">Home</NavLink>
                            <NavLink exact to='/projects' activeClassName="active">Projects</NavLink>
                            <NavLink exact to='/about' activeClassName="active">About</NavLink>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Headers;