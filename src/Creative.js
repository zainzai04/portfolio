import React from 'react';
import { FaTwitter, FaGithub, FaFacebookF, FaLinkedin, FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa';
import './Creative.css'; // Make sure to create a CSS file with the name 'CreativeLayout.css'
import Typewriter from "typewriter-effect";
import Spline from '@splinetool/react-spline';

const socialprofils = {
    github: "https://github.com/zainzai04",
    linkedin: "https://www.linkedin.com/in/zain-zai/",
    instagram: "https://www.instagram.com/zain_zai04/"
};



const Creative = () => {

  return (
    <div className="creative-layout">
      <div className="stick_follow_icon">
        <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        </ul>
        <p>Follow Me</p>
      </div>
      {/* <div className="sidebar">
        <div className="social-icons">
          <a href="#twitter" className="icon">T</a>
          <a href="#facebook" className="icon">F</a>
          <a href="#linkedin" className="icon">L</a>
        </div>
      </div> */}
      <div className="main-content">
        <header className="header">
          <h1>I'm Zain Zai</h1>
          <h2>
          <Typewriter
            options={{
                strings: [
                "Ambitious. Creative. Driven.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 2,
            }}
            />
          </h2>
          <p>I love building projects, learning, developing meaningful software</p>
          <div className="buttons">
            <a className="buttn" href="https://drive.google.com/file/d/18iQ15eGNiK4GTsemoTYfXYIQMCvJWPG3/view?usp=sharing" target="_blank">
                Résume
            </a>
            <a className="buttn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                Gift Me
            </a>
          </div>
        </header>
        <div className='image-placeholder'>
            {/* <Spline scene="https://prod.spline.design/WK7mRxxM8dLiCfXI/scene.splinecode" />
            <p>Credits: Spline 3D Library</p> */}
            <iframe
              width="600px"
              height="300px"
              src={`https://www.youtube.com/embed/axKprPAOX-c?si=YGIhmYwEwijpGgNV`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <p>This is a VR Demo for EECS 498! We used Unreal Engine 5 for the development, Blueprints within UE5 for 
              programming events specific to various characters/objects, Sketchfab for 3D models, FreeSound for SFX, and Jira for 
              task management. Shoutout to the RTX 4080 for seamless dev experience!</p> 
        </div>
      </div>
    </div>
  );
};

export default Creative;
