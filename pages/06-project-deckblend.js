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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
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
            <h1> \ Deck Blend</h1>
          </div>
          <div className='projectLowerp'>
            <p>
              You already love the space in your backyard but want to do a
              little more with it. You enjoy all the space you have and you
              worry you might lose something if you build a deck that will take
              up space. ​With the right vision we can make the deck you want
              without having to give up anything in the process. Take a look at
              this deck that blends into this family&apos;s big backyard.
              <br />
              This home had an existing deck and it plays a significant part of
              the family&apos;s day-to-day life. The idea was to rebuild what
              they had and make it new again. With that in mind, we took the
              time to understand what worked with the existing deck and what
              could be improved upon from a renovation and construction
              standpoint. As with all of our deck projects, we use southern
              yellow pine for the joists, beams, and pillars. Composite wood was
              used for the decking material, a truly long-lasting material and
              the right choice in this build. Aluminum railing added a modern
              touch that makes it all come together to make the deck blend in
              well with the rest of the house.
              <br />
              We enjoy seeing our clients be amazed by what we build for them.
              This type of deck is the type of investment into your home that
              truly adds value in more ways than one. This one hit that sweet
              spot where we know we did something special. The deck was exactly
              what they had envisioned and it continues to play a part of their
              day-to-day life.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default deckblend
