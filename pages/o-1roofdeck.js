import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Breadcrumb } from "react-bootstrap"
import { Image } from "react-bootstrap"

function roofdeck() {
  return (
    <div>
      <ProjectsContainer>
        <div>
          <Image
            src='/images/projects/p1/P1-00.jpg'
            alt='image'
            height={300}
            width={450}
          />
          <Image
            src='/images/projects/p1/P1-01.jpg'
            alt='image'
            height={300}
            width={450}
          />
          <Image
            src='/images/projects/p1/P1-02.jpg'
            alt='image'
            height={300}
            width={450}
          />
          <Image
            src='/images/projects/p1/P1-03.jpg'
            alt='image'
            height={300}
            width={450}
          />
          <Image
            src='/images/projects/p1/P1-04.jpg'
            alt='image'
            height={300}
            width={450}
          />
          <Image
            src='/images/projects/p1/P1-05.jpg'
            alt='image'
            height={300}
            width={450}
          />
          <Image
            src='/images/projects/p1/P1-07.jpg'
            alt='image'
            height={300}
            width={450}
          />
        </div>
        <h2>Deck and Roof</h2>
        <p>
          By the end of this project, we knew we made something really special.
          A deck by itself is a good sized project. By adding a roof and stone
          siding, this project had it all. The support structure was all made
          with treated southern yellow pine wood. That includes the pillars,
          joists, and beams. The decking itself was also built with traditional
          wood. Metal railing added a unique touch that is modern for
          today&apos;s decks. The roof was made like any traditional roof would
          be built and was made to blend in with the existing roof structure of
          the house. At the end, we added stone siding that gives this home a
          luxurious look.
        </p>
      </ProjectsContainer>
    </div>
  )
}

export default roofdeck
