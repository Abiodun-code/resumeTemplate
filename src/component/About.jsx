import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className='About'>
      <div className="About_wrap">
        <h1 data-aos="fade-up" data-aos-duration="2000">Who Am I?</h1>
        <p data-aos="fade-up" data-aos-duration="2000">A quality focused Software Developer with experience in the Technology domain,
          Software Development and maintenance experience. Extensive experience building
          commercial Web-based Applications and testing skills to ensure your software
          deployments roll out without a hitch.
        </p>
        <h2 data-aos="fade-right" data-aos-duration="2000">Skills</h2>
        <div className="Skill_shift" data-aos="fade-left" data-aos-duration="2000">
          <div className="Skill_first">
            <div className="first_content">
              <div className="content_text">
                <h1>HTML, CSS</h1>
                <p>99%</p>
              </div>
              <div className="content_line">
                <div className="first_line_one">
                  <div className="second_line_one"></div>
                </div>
              </div>
            </div>
            <div className="first_content">
              <div className="content_text">
                <h1>JavaScript</h1>
                <p>99%</p>
              </div>
              <div className="content_line">
                <div className="first_line_one">
                  <div className="second_line_one"></div>
                </div>
              </div>
            </div>
            <div className="first_content">
              <div className="content_text">
                <h1>TypeScript</h1>
                <p>99%</p>
              </div>
              <div className="content_line">
                <div className="first_line_one">
                  <div className="second_line_one"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Skill_second">
            <div className="second_content">
              <div className="content_text_sec">
                <h1>React</h1>
                <p>99%</p>
              </div>
              <div className="content_line_sec">
                <div className="first_line_two">
                  <div className="second_line_two"></div>
                </div>
              </div>
            </div>
            <div className="second_content">
              <div className="content_text_sec">
                <h1>Flutter</h1>
                <p>99%</p>
              </div>
              <div className="content_line_sec">
                <div className="first_line_two">
                  <div className="second_line_two"></div>
                </div>
              </div>
            </div>
            <div className="second_content">
              <div className="content_text_sec">
                <h1>Git & GitHub</h1>
                <p>99%</p>
              </div>
              <div className="content_line_sec">
                <div className="first_line_two">
                  <div className="second_line_two"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default About