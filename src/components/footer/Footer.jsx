import './../../App.css'
import linkdin from './../../assets/images/icons8-linkedin-48.png'
import github from './../../assets/images/icons8-github-50.png'
import hackerRank from './../../assets/images/hackerank.png'
import mail from './../../assets/images/icons8-gmail-48.png'

function Footer(){
    const formatDate = () => {
        const buildDate = import.meta.env.BUILD_DATE;
        if (buildDate) {
            try {
                return new Date(buildDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            } catch {
                return new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            }
        }
        return new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return(
        <>
            <footer>
                <h3>Follow Me</h3>
                <div>
                    <a href="https://www.linkedin.com/in/anjaneyulu-velpuri/" target="_blank"><img src={linkdin} alt="LinkedIn" /></a>
                    <a href="mailto: velpurianji2002@gmail.com" target="_blank"><img src={mail} alt="Gmail" /></a>
                    <a href="https://github.com/veera-0" target="_blank"><img src={github} alt="GitHub" /></a>
                    <a href="https://www.hackerrank.com/CSE_19JR1A05I8" target="_blank"><img src={hackerRank} alt="HackerRank" /></a>
                </div>
                <div style={styles.updateContainer}>
                    <p style={styles.updateText}>Last Updated: {formatDate()}</p>
                </div>
            </footer> 
        </>
    )
}

const styles = {
    updateContainer: {
        paddingTop: '0.5rem',
        borderTop: '0.5px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
    },
    updateText: {
        fontSize: '0.9rem',
        color: 'black',
        fontWeight: '500',
        letterSpacing: '0.5px',
        margin: '0'
    }
};

export default Footer;