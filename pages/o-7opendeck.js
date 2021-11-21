import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"

function opendeck() {
  return (
    <div>
      <ProjectsContainer>
        <div>
          <Image src='/images/t/ph.PNG' alt='image' height={300} width={450} />
        </div>
        <h2>Open Flat Deck</h2>
        <p>
          When you have a big backyard, you can do a lot with it. That includes
          building a deck to do more things with the space. This deck provides
          enough space for a good-sized barbecue. Our client had that in mind
          when describing what the deck was going to be used for. In the end,
          that&apos;s what we built for. We build the foundation with beams,
          joists, and pillars made from treated traditional wood. Decking
          material on this project is composite wood, giving the deck a modern
          look. The railing adds to the look, giving it class, comfort, and
          durability.{" "}
        </p>
      </ProjectsContainer>
    </div>
  )
}

export default opendeck
