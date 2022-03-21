import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portifolio.png'
import IMG2 from '../../assets/ccr.jpg'
import IMG3 from '../../assets/imperio.jpg'
import IMG4 from '../../assets/codding.png'
import IMG5 from '../../assets/sos.png'

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'I worked at codding as a trainee, developing improvements in the systems produced by the company. I analyzed several scripts and used SQL in order to extract reports for the clients.',
    github: 'https://www.codding.com.br/',
    buttonTitle: 'Site da empresa'
  },
  {
    id: 2,
    image: IMG2,
    title: 'I provided support for the systems developed for all the company`s units. Providing training, analyzing incidents that are reported by users and promoting improvements in the respective systems. I assisted the project team in the system implementations in the international units of the group, generating documentation, training and improvement points for the unit`s employees.',
    github: 'https://www.grupoccr.com.br/',
    buttonTitle: 'Site da empresa'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Currently working with imperio on developing technologies and solutions aimed at the process automation market. I use Azure to track sprints and control source code versions. I program Web interfaces using technologies like: AngularJS, Typescript, HTML, JavaScript, CSS and Bootstrap',
    github: 'http://www.imperio.com.br/',
    buttonTitle: 'Site da empresa'
  },
  {
    id: 4,
    image: IMG5,
    title: 'This was my first big project and also my college thesis. Together with two colleagues, we made a system aimed at the population`s security. The project is still under development and our goal is to implement it in some city to put into practice its main purpose, which is to help control the occurrences reported to the police stations.',
    github: 'http://github.com/thiagoBarrosDev',
    buttonTitle: 'GitHub'
  },
  {
    id: 5,
    image: IMG1,
    title: 'I built this portfolio, using Javascript and ReactJs technologies in order to improve my knowledge in React library. Taking advantage of this being a personal project, I invested my time to make all the styles of the page using pure css (avoiding the use of frameworks like Bootstrap for example), in order to better understand how responsive properties work.',
    github: 'http://github.com/thiagoBarrosDev',
    buttonTitle: 'GitHub'
  }
]

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Some Of The Works I Did</h5>
      <h2> Portfolio </h2>

      <div className="container portifolio__container">

        {
          data.map(({ id, image, title, github, buttonTitle }) => {
            return (
              <article key={id} className='portifolio__item'>
                <div className="portifolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <a href={github} className='btn' target='_blank'> {buttonTitle} </a>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portifolio