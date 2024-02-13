import React from 'react'
import { ColumnContainer, RowContainer } from '../styled-components/Containers'


function About() {


  return (
    <>
      <ColumnContainer padding='0 10rem' position='absolute' id="about-content">
        <RowContainer
          textAlign='left'
          width="50vw"
          id="about-heading"
          alignItems="center"
          margin="4vw 0"
        >
          <ColumnContainer id="about-title">
            <h1>{`Mae May (she/her)`}</h1>
            <p>{`Hi I'm Mae, and I love to build things!`}</p>
          </ColumnContainer>
          <img
            src='https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/profilepic.jpeg?raw=true'
            alt="A profile picture of Mae wearing some nice jewelry and smiling in warm light"
          />
        </RowContainer>

            <p>{`I am a software engineer and web developer who writes clean, efficient code using React, JavaScript, postgreSQL, and Express. I love to collaborate with designers and product developers, so if you're looking to collaborate - reach out!`}</p>

            <br/><br/><br/><br/>

            <p>{`In addition to coding, I work as an AV Technician at the `}<a href="https://judson.org" target='blank'>Judson Memorial Church</a>{`, and previously ran a `}<a href="https://maemaywoodworking.com" target='blank'>woodworking business</a> {` and learned all kinds of things about working with clients, sketching out their ideas, creating a roadmap, and communicating the timeline with them, and working with a variety of components to bring the project into physical reality.`}</p>

        </ColumnContainer>
    </>
  )
}

export default About
