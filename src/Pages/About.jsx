import React from 'react'
import Header from '../components/Header/Header'
import HeroPage from '../components/Hero/HeroPage'
import Footer from '../components/Footer/Footer'
import Information from '../components/Information/Information'
import FollowUs from '../components/FollowUs/FollowUs'
import Stablished from '../components/Information/Stablished'

const About = () => {
  return (
    <>
    <Header/>
    <HeroPage heading="About"/>
    <Information/>
    <Stablished/>
    <FollowUs/>
    <Footer/>
    </>
  )
}

export default About
