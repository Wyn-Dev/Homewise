import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
function fencing() {
  return (
    <div>
      <ProjectsContainer>
        <div>
          {" "}
          <Image src='/images/t/ph.PNG' alt='image' height={300} width={450} />
        </div>
        <h2>Perimeter Fencing</h2>
        <p>
          Privacy is hard to come by in the city, but fencing can help you get
          it back. Whether you need privacy, a safe place for your kids or pets
          to run around, fences provide a peace of mind you can&apos;t get
          anywhere else.{" "}
        </p>
      </ProjectsContainer>
    </div>
  )
}

export default fencing
