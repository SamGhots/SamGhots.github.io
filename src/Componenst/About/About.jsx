import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img1 from "../../assets/profile_img1.jpg";
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='about-sections'>
        <div className="about-left">
            <img src={profile_img1} className='' alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hello! My name is Sam, and I am currently studying computer science at <span>Thonburi Rajabhat University  </span>in my<span> fourth year </span>. I am passionate about web development using PHP and React.js, as well as design with Figma and mobile app development with Flutter. I enjoy creating websites for small businesses to help them grow in the digital age. My goal is to deliver excellent design and functional features. I look forward to working with you on exciting projects.</p>
                <p>My passion for frontend development and mobile developer</p>
             
                <h1 className='about-heading'>EDUCATION</h1>
                <p>Dhonburi Rajabhat University(DRU),Bangkok </p>
                <p> 2021-2024  GPAX 3.50</p>
            </div>
            <div className="about-skills">
            
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} />50%</div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} />50%</div>
                    <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}} />50%</div>
                    <div className="about-skill"><p>Dart</p><hr style={{width:"20%"}} />20%</div>
         
                    <div className="about-skill"><p>React JS</p><hr style={{width:"20%"}} />20%</div>
                    <div className="about-skill"><p>flutter</p><hr style={{width:"20%"}} />20%</div>
                    <div className="about-skill"><p>figma</p><hr style={{width:"5%"}} />5%</div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>0</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>6+</h1>
            <p>PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>0</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
