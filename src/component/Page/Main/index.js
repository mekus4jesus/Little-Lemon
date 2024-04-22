import React from 'react'
import { CallToAction } from './CallToAction'
import { SpecialWeek } from './specialWeek'
import { Card } from './Menu'
import { Testimonal } from './Testimonal'
import { About } from './About'
import { Footer } from '../../Footer'



export const Home = () => {
  return (
    <main>
    <CallToAction />
    <SpecialWeek />
    <Card />
    <Testimonal />
    <About />
    <Footer />
    </main>
  )
}


