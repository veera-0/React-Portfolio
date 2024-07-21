import Footer from "../footer/Footer";
import Headers from "../header/Headers";
import Skills from "../main/Skills";
import { useEffect } from "react";

export default function SkillsPage(){

    useEffect(() => {
        document.title = 'Veera | Skills';
    }, []);

    return(
        <div>
            <Headers />
            <Skills/>
            <Footer/>
        </div>
    )
}