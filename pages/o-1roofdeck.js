import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import Image from "react-bootstrap"
import Head from "next/head"

function roofdeck() {
  return (
    <div>
      <Head>
        <title>Roof and Deck project from Homewise Construction</title>
        <meta
          name='description'
          content='Top light residential construction in Effingham county'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image src='/images/projects/p1/P1-00.jpg' alt='image' />
          <Image src='/images/projects/p1/P1-01.jpg' alt='image' />
          <Image src='/images/projects/p1/P1-02.jpg' alt='image' />
          <Image src='/images/projects/p1/P1-03.jpg' alt='image' />
          <Image src='/images/projects/p1/P1-04.jpg' alt='image' />
          <Image src='/images/projects/p1/P1-05.jpg' alt='image' />
          <Image src='/images/projects/p1/P1-06.jpg' alt='image' />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2>Deck and Roof</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              By the end of this project, we knew we made something really
              special. A deck by itself is a good sized project. By adding a
              roof and stone siding, this project had it all. The support
              structure was all made with treated southern yellow pine wood.
              That includes the pillars, joists, and beams. The decking itself
              was also built with traditional wood. Metal railing added a unique
              touch that is modern for today&apos;s decks. The roof was made
              like any traditional roof would be built and was made to blend in
              with the existing roof structure of the house. At the end, we
              added stone siding that gives this home a luxurious look.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default roofdeck
