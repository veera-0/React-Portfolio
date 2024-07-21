/* eslint-disable react/prop-types */
import './../../App.css'

//project template
function ProjectMain(props){

    return(
        <section className="sec">
            <div className="pro">
                <img src={props.image} alt="image" loading='eager' />
                <h5><span style={{color:'black'}}>Project Title</span>: {props.title}</h5>
                <p className="tech">{props.technology}</p>
                <p className="description">{props.description}</p>
                <button className="b2"><a href={props.reference}>View code</a></button>           
            </div>
        </section> 
    )
}

export default ProjectMain;