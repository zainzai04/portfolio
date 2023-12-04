import React from 'react';
import './About.css';

// Dummy data for work timeline and skills
const worktimeline = [
  { jobtitle: 'Fullstack Developer', where: '@ 7th Sapien', date: 'Oct. 2023 -' },
  { jobtitle: 'Director of Outreach', where: '@ MHacks', date: 'Aug. 2023 -' },
  { jobtitle: 'Deep Learning Research', where: '@ MDST', date: 'Winter 2023' },
];

const skills = [
  { name: 'C++', value: '93%', word: 'Proficient' },
  { name: 'Python', value: '90%', word: 'Proficient' },
  { name: 'React', value: '60%', word: 'Knowledgeable' },
];

const About = () => {
  return (
  <div className="big-boss">
    <div className="About-header">
      <h1 className="section-title">About me</h1>
      <hr class="custom-hr"/>
      <div className="about-content">
        <div className="about-text">
          <h3 className="color_sec">A bit more about myself</h3>
          <p>I am an undergraduate student at the University of Michigan, 
            pursuing a degree in CS. I love learning about software & applying my 
            skills to create cool projects. Alongside my studies, I have done 
            some cool extracurricular activities such as being an organizer in the 
            reboot of MHacks, being a part of V1 (builders' club), and even leading 
            a neural network project with MDST (ML Project Team). When I'm not nerding 
            out, I love playing football, watching & coaching soccer, listening to music,
            going on night drives, etc.
          </p>
        </div>
        <div className="work-timeline">
          <h3 className="color_sec">Projects / Experience</h3>
          {worktimeline.map((item, index) => (
            <div className="timeline-entry" key={index}>
              <span>{item.jobtitle}</span>
              <span>{item.where}</span>
              <span>{item.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skills">
        <h3 className="color_sec">Skills</h3>
        {skills.map((skill, index) => (
          <div className="skill-entry" key={index}>
            <span>{skill.name}</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: skill.value }}>
                <span className="progress-value"> {skill.word} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default About;
