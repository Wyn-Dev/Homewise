import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"

function onestep() {
  return (
    <div>
      <ProjectsContainer>
        <div>
          {" "}
          <Image src='/images/t/ph.PNG' alt='image' height={300} width={450} />
        </div>
        <h2>Step Deck</h2>
        <p>
          The focus of this deck was to provide a minimal footprint, give
          functionality where it was needed, and just give a warmer, softer feel
          to the deck from what was there before. We poured new concrete that
          gave a foundation to the new hot tub for the home. The end product was
          exactly what the client wanted.{" "}
        </p>
      </ProjectsContainer>
    </div>
  )
}

export default onestep
