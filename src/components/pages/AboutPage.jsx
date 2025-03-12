import Footer from '../footer/Footer'
import Headers from '../header/Headers'
import About from '../main/About/About'
import './../../App.css'
// import educationData from '../../data/educationData'
import styled from 'styled-components'

const AppWrapper = styled.div`
    font-family: 'Arial', sans-serif;
    text-align: center;
`;

function AboutPage() {
    return(
      <> 
        <Headers />
        <>
            <AppWrapper>
                <About />
            </AppWrapper>
        </>
        <Footer />
        </>  
    );
}

export default AboutPage;