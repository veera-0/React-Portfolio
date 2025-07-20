/* eslint-disable react/prop-types */
import './../../../App.css'
import TechnologyChips from './TechnologyChips';

//project template
function ProjectMain(props){

    return(
        <section className="sec">
            <div className="pro">
                <img src={props.image} alt="image" loading='eager' />
                <h5><span style={{color:'black'}}>Project Title</span>: {props.title}</h5>
                <p className="tech">
                    <TechnologyChips technology={props.technology} />
                </p>
                <p className="description">{props.description}</p>
                <div className="button-wrapper">
                   <button className="b2"><a href={props.reference}>View code</a></button>
                </div>
            </div>
        </section> 
    )
}

export default ProjectMain;