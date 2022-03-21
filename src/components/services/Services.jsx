import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container services__container">
        {/* <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
          </ul>
        </article> */}
        {/* END OF UI/UX TAG */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building modern, responsive websites. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Support on general problems with the site I built. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Support to fix the problems with your existing site. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Refactoring your website code. </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT TAG */}

        {/* <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet adipisicing elit. </p>
            </li>
          </ul>
        </article> */}
        {/* END OF CONTENT CREATION TAG */}
      </div>
    </section>
  )
}

export default Services