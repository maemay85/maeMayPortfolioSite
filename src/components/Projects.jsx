import { ColumnContainer, RowContainer } from "./styled-components/Containers"
import ProjectCard from "./styled-components/ProjectCard"



const Projects = () => {
  const projects = [
    {
      title: 'Law Firm of Reuben Fuller Bennett',
      tagline: 'Website built for client. Designed by Yael Krevsky, and built by yours truly using Vite with React, deployed on Vercel',
      url: 'https://rfblaw.nyc',
      imageUrl: 'https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/rfblaw%20thumbnail.png?raw=true'
    },
    {
      title: 'My Silly Little Synthesizer',
      tagline: 'Built in a day as proof of concept. Will be building out and developing to improve performance, and include additional effects and parameters. Fun!',
      url: 'https://modular-synth-ten.vercel.app',
      imageUrl: 'https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_7bnCDE7saxwepizK6caDva97xmcB%26teamId%3Dmaemay85%26withStatus%3D1&w=1920&q=75&dpl=dpl_4D1PGNa1ugheGUPL6dQ3kBReFGZT'
    },
    {
      title: 'augmentEd',
      tagline: 'A peer-to-peer music teaching web application. Built in collaboration with Shoshana Levit, Rachel Cora Wood, and Zoe Moersch. ',
      url: 'https://augmented.onrender.com/',
      imageUrl: 'https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/thumbnail-augmentEd.png?raw=true'
    },

    {
      title: 'W.E.L.P. (We Effing Love Planets)',
      tagline: 'A static educational web application about our solar system - built in collaboration with Madeleine Lloyd-Davies, Rachel Eckert, and Lindsay Powell',
      url: "https://welp-y6ke.onrender.com/",
      imageUrl: 'https://github.com/maemay85/maeMayPortfolioSite/blob/main/src/assets/thumbnail-welp.png?raw=true'
    },
  ]


  return (
    <>
      <ColumnContainer width='100vw'>
        {projects.map((project)=>{
          return (
            <ProjectCard
              key={project.title}
              text={project.title}
              url={project.url}
              tagline={project.tagline}
              imageUrl={project.imageUrl}
            />
          )
        })

        }
      </ColumnContainer>
    </>
  )
}

export default Projects
