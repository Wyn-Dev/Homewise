import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
function deckblend() {
  return (
    <div>
      <Head>
        <title>About Homewise Construction</title>
        <meta
          name='description'
          content='Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work. We are knnown for our deck builds along with general carpentry work.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0'></meta>

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p6/P6-01.jpg'
            alt='Homewise Construction. This image shows the original deck of the house.'
          />
          <Image
            src='/images/projects/p6/P6-02.jpg'
            alt='Homewise Construction. This image shows the deck in a late phase where the railing is being placed.'
          />
          <Image
            src='/images/projects/p6/P6-03.jpg'
            alt='Homewise Construction. This image shows the deck in a late stage.'
          />
          <Image
            src='/images/projects/p6/P6-04.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of our light residential construction work. '
          />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2>Deck Blend</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              You love the space in your backyard but want to do a little more
              with it. You enjoy all the space you have. ​ This home had an
              existing deck and it played a significant part of the
              family&apos;s day-to-day life. The idea was to rebuild what they
              had and make it new again. With that in mind, we made took the
              time to understand what worked and what could be improved upon. As
              with all of our deck projects, we use southern yellow pine for the
              joists, beams, and pillars. Composite wood was used for the
              decking material. Aluminum railing added a modern touch that
              brings it all together to make the deck blend in well with the
              rest of the house.{" "}
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default deckblend
