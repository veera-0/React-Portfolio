/* eslint-disable react/prop-types */
import './About.css';
// import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
`;

const About = () => {

  const educationData = [
    { year: '2019-2023', title: 'Bachelor of Science in Computer Science', description: 'Completed my Bachelor\'s in CSE from KKR&KSR institute of technology & sciences' },
    { year: '2017-2019', title: 'Intermediate', description: 'Completed my intermediate in PCM(Physics,Chemistry,Maths)' },
    { year: '2016-2017', title: 'CBSE', description: 'I completed my 10th class at NATCO school of leaning' },
  ];

  const aboutMe = "I am a passionate software developer with a strong background in computer science. I have a keen interest in web development and enjoy creating interactive and dynamic web applications. I am always eager to learn new technologies and improve my skills.";


  return (
    <>
      <div className="about-me">
        <h2>About Me</h2>
        <p>{aboutMe}</p>
      </div>
      <TimelineWrapper>
        <VerticalTimeline>
          {educationData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              iconStyle={{ background: '#2196F3', color: '#fff' }}
              contentStyle={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              icon={<div className="timeline-icon">{item.year}</div>}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.institution}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </TimelineWrapper>
    </>
  );
};

export default About;