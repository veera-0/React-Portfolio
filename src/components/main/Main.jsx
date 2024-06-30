/* eslint-disable react/no-unescaped-entities */
import work from './../../assets/images/work.jpg'
import pdf from './../../assets/images/Venkata veera anjaneyulu(2).pdf'
import './../../App.css'

function Main(){
    return(
        <section id="hero">
                <div>
                    <h1>Hi, I am <br/> Veera Anjaneyulu</h1>
                    <p>I'm an engineering graduate, enthusiastic in learning new skills, expand my knowledge and leverage my learnings.</p>
                    <a href={pdf} download="Venkata veera anjaneyulu(2).pdf"><button className="button">Download resume</button></a>
                </div>
                <img src={work} />
        </section>  
    )
}

export default Main;