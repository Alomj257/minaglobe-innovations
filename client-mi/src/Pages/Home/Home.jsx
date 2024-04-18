import React from 'react'
import Service from '../Service/Service'
import AboutUs from '../About/About'
import HeroHeader from '../../components/Header/Header'
import TeamMember from '../../components/Teams/Teams'
import Testimonial from '../../components/Testimonial/Testimonial'
import Faq from '../../components/Faq/Faq'

function Home() {
  return (
    <>
    <HeroHeader/>
    <Service/>
    {/* <AboutUs/> */}
    <Testimonial/>
    <Faq/>
    <TeamMember/>
    </>
  )
}

export default Home