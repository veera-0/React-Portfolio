import './../../App.css'
import logo from './../../assets/images/icon.jpg'
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
                        <div>
                            <NavLink exact to='/' activeClassName="active">Home</NavLink>
                            <NavLink exact to='/project' activeClassName="active">Projects</NavLink>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Headers;