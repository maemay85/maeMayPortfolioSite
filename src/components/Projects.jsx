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
