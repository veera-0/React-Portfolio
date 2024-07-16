/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import work from './../../assets/images/work.jpeg'
import './../../App.css'
import React,{ useState } from 'react'
import Resume from './../../assets/resume/VelpuriAnjaneyulu.pdf'


function Main(){
    
    return(
        <section id="hero">
                <div>
                    <h1>Hi, I am <br/> Veera Anjaneyulu</h1>
                    <p>I'm an engineering graduate, enthusiastic in learning new skills, expand my knowledge and leverage my learnings.</p>
                    <a href={Resume} download="Velpuri Anjaneyulu.pdf"><button className="button">Resume</button></a>
                </div>
                <img src={work} alt='image' loading='lazy' />
        </section>  
    )
}

export default Main;