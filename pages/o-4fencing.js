import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
function fencing() {
  return (
    <div>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image src='/images/projects/p4/P4-00.jpg' alt='image' />
          <Image src='/images/projects/p4/P4-01.jpg' alt='image' />
          <Image src='/images/projects/p4/P4-02.jpg' alt='image' />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2>Perimeter Fencing</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              Privacy is hard to come by in the city, but fencing can help you
              get it back. Whether you need privacy, a safe place for your kids
              or pets to run around, fences provide a peace of mind you
              can&apos;t get anywhere else.{" "}
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default fencing
