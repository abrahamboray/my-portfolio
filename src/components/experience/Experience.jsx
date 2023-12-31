import React from 'react'
import './Experience.css'
import {BsPatchCheck} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
              
           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
              
           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Advanced</small>
              </div>
              
           </article>

          </div>

        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>

           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>My SQL</h4>
                <small className='text-light'>Advanced</small> 
              </div>

           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
              
           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Basic</small>
              </div>
              
           </article>

           <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
           </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience