import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"

function houseaddition() {
  return (
    <div>
      <ProjectsContainer>
        <div>
          {" "}
          <Image src='/images/t/ph.PNG' alt='image' height={300} width={450} />
        </div>
        <h2>House Addition & Split side Deck</h2>
        <p>
          The homes we work with always have something unique about the project.
          This particular project gave us an opportunity to blend our specialty
          of making decks with another of our specialties, room additions. We
          built this house addition with two things in mind, growth and
          expansion. The idea was to grow the inside of the home by extend the
          existing living room and expand the house and walking area with the
          deck. The room had a number of finishing touches that make the room
          look like it was always a part of the house. The deck provides space
          for viewing the large wooded backyard area.{" "}
        </p>
      </ProjectsContainer>
    </div>
  )
}

export default houseaddition
