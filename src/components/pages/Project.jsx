import './../../App.css'
import ProjectMain from './../main/ProjectMain'
import bends from './../../assets/images/bends.jpg'
import Headers from './../header/Headers'
import Footer from './../footer/Footer'
import { useEffect } from 'react'
import shop from './../../assets/images/petstore.jpg'
import seat from './../../assets/images/seat.jpg'
import calculator from './../../assets/images/calc.png'

function Project(){

    useEffect(() => {
        document.title = 'Veera | Projects';
    }, []);

    return(
        <>
        <Headers />
            <main>
                <p className='underline'>Projects</p>
                <hr/>
                <div className="grid">
                    <ProjectMain image={bends} 
                        title="Capillus pin bends" 
                        technology="IOT | Arduino" 
                        description="This project is developed to reduce the accidents in hilly areas"
                        reference="https://github.com/veera-0/Capillus-pin-bends"/>

                    <ProjectMain image={calculator} 
                        title="Calculator app" 
                        technology="ReactJs" 
                        description="This application was built using ReactJs for basic calculation"
                        reference="https://github.com/veera-0/CalculatorApp"/>

                    <ProjectMain image={shop} 
                        title="Pet Store" 
                        technology="SQL | Springboot" 
                        description="This application was built using springboot framework with sql database for CRUD operations"
                        reference="https://github.com/veera-0/Springboot-application"/>

                    <ProjectMain image={seat} 
                        title="Seat Booking System" 
                        technology="HTML | CSS | PHP | SQL |JS" 
                        description="This is web application used to book seating. PHP is used for storing & retrieving from SQL."
                        reference="https://github.com/veera-0/Springboot-application"/>
                </div>
            </main>
        <Footer />
        </>
    )
}

export default Project;