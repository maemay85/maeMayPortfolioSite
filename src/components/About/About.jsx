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
          <img src='src/assets/profilepic.jpeg' alt="A profile picture of Mae wearing some nice jewelry and smiling in warm light"/>
        </RowContainer>

            <p>{`I am a software engineer and web developer who writes clean, efficient code using React, JavaScript, postgreSQL, and Express. I love to collaborate with designers and product developers, so if you're looking to collaborate - reach out!`}</p>

            <br/><br/><br/><br/>

            <p>{`Prior to coding, I ran a `}<a href="https://maemaywoodworking.com">woodworking business</a> {` and learned all kinds of things about working with clients, sketching out their ideas, creating a roadmap, and communicating the timeline with them, and working with a variety of components to bring the project into physical reality. It was actually this that prepared me for fullstack development - only now I'm working with code instead of, you know, wood.`}</p>

            <p>And of course, at heart, I am still and always will be <a href="https://maemay.art">an artist</a> - and have extensive experience in music and dance performance and composition, and textile design and fabrication.  Again, I love to build things! </p>

        </ColumnContainer>
    </>
  )
}

export default About
