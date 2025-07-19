/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './About.css';
// import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getEducationData, getProfile } from '../../../services/SupabaseService';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const TimelineWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;

  .vertical-timeline::before {
    background: linear-gradient(to bottom, #293156ff, #4f6dff);
    width: 4px;
  }
`;

const About = () => {

    const [educationDetails, setEducationDetails] = useState([]);
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
      useEffect(() => {
          document.title = 'Veera | Projects';
  
          async function fetchEducationData() {
              try {
                  const data = await getEducationData();
                  setEducationDetails(data);
                  
              } catch (err) {
                  setError('Failed to load projects');
              } finally {
                  setTimeout(() => {
                    setLoading(false);  
                  }, 1000);
              }
          }

          async function fetchProfile() {
            try{
              const profileData = await getProfile(1);
              setProfile(profileData);
          
            } catch(err) {
              setError('Failed to load profile data');
            } finally {
              setTimeout(() => {
                    setLoading(false);
              }, 1000);
            }
          }
  
          fetchProfile();
          fetchEducationData();
      }, []);

  return (
    <>
      {loading && 
        <Box sx={{ alignContent: 'center', width: '100%', height: '100vh' }}>
          {/* <LinearProgress /> */}
          <CircularProgress size="6rem" />
        </Box>
      }
      {!loading &&
         <>
           <div className="about-me">
            <h2 style={{color:'green'}}>About Me</h2>
            <p>{profile.about}</p>
          </div>
          <TimelineWrapper>
            <VerticalTimeline>
              {educationDetails.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--education"
                  iconStyle={{ background: '#293156ff', color: '#fff' }}
                  contentStyle={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                  icon={<div className="timeline-icon">{item.year}</div>}
                >
                  <h3 className="vertical-timeline-element-title" style={{color: 'green'}}>{item.educationLevel}</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{paddingTop: '15px'}}>{item.educationInfo}</h4>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </TimelineWrapper>
         </>
      }
    </>
  );
};

export default About;