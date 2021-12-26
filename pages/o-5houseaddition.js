import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"

function houseaddition() {
  return (
    <div>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image src='/images/projects/p5/P5-00.jpg' alt='image' />
          <Image src='/images/projects/p5/P5-01.jpg' alt='image' />
          <Image src='/images/projects/p5/P5-02.jpg' alt='image' />
          <Image src='/images/projects/p5/P5-03.jpg' alt='image' />
          <Image src='/images/projects/p5/P5-04.jpg' alt='image' />
          <Image src='/images/projects/p5/P5-05.jpg' alt='image' />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2> \ House Addition & Split side Deck</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              The homes we work with always have something unique about the
              project. This particular project gave us an opportunity to blend
              our specialty of making decks with another of our specialties,
              room additions. We built this house addition with two things in
              mind, growth and expansion. The idea was to grow the inside of the
              home by extend the existing living room and expand the house and
              walking area with the deck. The room had a number of finishing
              touches that make the room look like it was always a part of the
              house. The deck provides space for viewing the large wooded
              backyard area.{" "}
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default houseaddition
