import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
function fencing() {
  return (
    <div>
      <ProjectsContainer>
        <Image src='/images/t/ph.PNG' alt='image' height={300} width={450} />
        This is the content for each Page that should show up
      </ProjectsContainer>
    </div>
  )
}

export default fencing
