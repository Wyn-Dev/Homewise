import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"

function lakeside() {
  return (
    <div>
      <Head>
        <title> Lakeside Deck from Homewise Construction</title>
        <meta
          name='description'
          content='Top light residential construction in Effingham county'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image src='/images/projects/p2/P2-00.jpg' alt='image' />
          <Image src='/images/projects/p2/P2-01.jpg' alt='image' />
          <Image src='/images/projects/p2/P2-02.jpg' alt='image' />
          <Image src='/images/projects/p2/P2-03.jpg' alt='image' />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2>Lakeside Deck</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              An amazing view comes with a home by the lake. When you have a
              home by a lake, one of the many comforts is enjoying the view.
              With this project, the client wanted a deck that didn&apos;t
              obstruct the view of the lake below. The idea was to have the deck
              blend in with the landscaping of the beautiful backyard. We built
              this deck with traditional wood from top to bottom. Beams, joists,
              and posts were built with treated pine wood giving it a durable
              material that will last The landscape had some great natural
              curves along the bank leading down to the lake. This deck provides
              a great view of the lake, blends in with the landscape and the
              home. You couldn&apos;t imagine this home without seeing it with
              this deck.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default lakeside
