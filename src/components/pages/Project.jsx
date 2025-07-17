import './../../App.css'
import ProjectMain from './../main/ProjectMain'
import Headers from './../header/Headers'
import Footer from './../footer/Footer'
import { useEffect, useState } from 'react'
import { getProjects } from '../../services/SupabaseService'
import Skeleton from '@mui/material/Skeleton';

function Project() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = 'Veera | Projects';

        async function fetchProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
            } finally {
                // setTimeout(() => {  
                    setLoading(false);
                // }, 5000);
            }
        }

        fetchProjects();
    }, []);

    return (
        <>
            <Headers />
            <main style={{background: 'linear-gradient(15deg, #00416A, #E4E5E6)'}}>
                <p className='underline'>Projects</p>
                <hr />
                {loading && (
                    <div className="grid">
                        {[...Array(6)].map((_, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: '#fff',
                                    borderRadius: 8,
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                    padding: 16,
                                    minWidth: 250,
                                    maxWidth: 350,
                                    width: '100%',
                                    margin: '0 auto 40px auto',
                                    display: 'flex',
                                    flexDirection: 'column'
                                    
                                }}
                            >
                                    <Skeleton variant="rectangular" width="100%" height={140} style={{ borderRadius: 8 }} />
                                    <Skeleton variant="text" width="80%" height={32} />
                                    <Skeleton variant="text" width="60%" height={24} />
                                    <Skeleton variant="text" width="90%" height={20} />

                            </div>
                        ))}
                    </div>
                )}
                {!loading && error && <div style={{ color: 'red' }}>{error}</div>}
                {!loading && (
                    <div className="grid">
                        {projects.map((proj) => (
                            <ProjectMain
                                key={proj.project_id}
                                image={proj.project_ImageUrl}
                                title={proj.projecttitle}
                                technology={proj.techused}
                                description={proj.projectdescription}
                                reference={proj.project_link}
                            />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}

export default Project;