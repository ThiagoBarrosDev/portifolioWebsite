import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import { FaAward } from 'react-icons/fa'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working as a Developer</small>
            </article>

            <article className='about__card'>
              <MdOutlineWorkOutline className='about__icon' />
              <h5>Companies</h5>
              <small>Worked in 3 Companies</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hi there, I'm Thiago Barros. Passionate about Front-End and good Music. Here is some interest things about me: <br/> I'm currently Working with Front-End; <br/> I'm actually learning React, Angular and Typescript; <br/>  Fun fact: Instead of coffee, I prefer chill songs while cooding 😄;  <br /><br /> A great dream I wish to conquer one day is to get my license and be able to fly solo one day!!!.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About