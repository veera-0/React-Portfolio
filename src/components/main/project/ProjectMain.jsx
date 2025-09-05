/* eslint-disable react/prop-types */
import './../../../App.css'
import TechnologyChips from './TechnologyChips';

//project template
function ProjectMain(props){

    return(
        <section className="sec">
            <div className="pro">
                <img src={props.image} alt="image" loading='lazy' fetchPriority="high"/>
                <h5><span style={{color:'black'}}>Title:</span> {props.title}</h5>
                <div className="tech">
                    <TechnologyChips technology={props.technology} />
                </div>
                <p className="description">{props.description}</p>
                <div className="button-wrapper">
                   <button className="b2"><a href={props.reference} target='_blank'>View code</a></button>
                </div>
            </div>
        </section> 
    )
}

export default ProjectMain;