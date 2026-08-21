/* eslint-disable react/prop-types */
import './../../../App.css'
import TechnologyChips from './TechnologyChips';
import { useState } from 'react';

//project template
function ProjectMain(props){
    const [imgLoaded, setImgLoaded] = useState(false);

    return(
        <section className="sec">
            <div className="pro">
                {!imgLoaded && (
                    <div className="img-skeleton" style={{ width: '100%', height: '140px', background: 'grey' }} />
                )}
                <img src={props.image} 
                    alt="image" 
                    loading='lazy' 
                    //style={imgLoaded ? {} : {display: 'none'}}
                    onLoad = {() => setImgLoaded(true)}
                />
                <h5><span style={{color:'black'}}>Title:</span> {props.title}</h5>
                <div className="tech">
                    <TechnologyChips technology={props.technology} />
                </div>
                <p className="description">{props.description}</p>
                <div className="button-wrapper">
                   <button className="b2" onClick={props.onClick}>
                        <a href={props.reference} target='_blank' rel='noreferrer'>View code</a>
                   </button>
                </div>
            </div>
        </section> 
    )
}

export default ProjectMain;