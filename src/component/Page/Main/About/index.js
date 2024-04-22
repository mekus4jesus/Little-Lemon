import React from 'react'
import { AboutComponent } from './AboutComponent'

export const About = () => {
  return (
    <section className='About'>
       <div className="aboutSection grid-adjustable-columns">
          <div className="aboutHead">
            <div className="aboutTitle heroLeft">
              <h1>Little Lemon</h1>
              <p>Nigeria</p>
            </div>
            <div className="aboutCompany">
            <AboutComponent/>
            </div>
          </div>
       </div>
    </section>
  )
}


