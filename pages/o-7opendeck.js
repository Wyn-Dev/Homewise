import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
function opendeck() {
  return (
    <div>
      <Head>
        <title>About Homewise Construction</title>
        <meta
          name='description'
          content='Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work. We are knnown for our deck builds along with general carpentry work.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image src='/images/projects/p7/P7-00.jpg' alt='image' />
          <Image src='/images/projects/p7/P7-01.jpg' alt='image' />
          <Image src='/images/projects/p7/P7-02.jpg' alt='image' />
          <Image src='/images/projects/p7/P7-03.jpg' alt='image' />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2> Open Flat Deck </h2>
          </div>
          <div className='projectLowerp'>
            <p>
              When you have a big backyard, you can do a lot with it. That
              includes building a deck to do more things with the space. This
              deck provides enough space for a good-sized barbecue. Our client
              had that in mind when describing what the deck was going to be
              used for. In the end, that&apos;s what we built for. We build the
              foundation with beams, joists, and pillars made from treated
              traditional wood. Decking material on this project is composite
              wood, giving the deck a modern look. The railing adds to the look,
              giving it class, comfort, and durability.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default opendeck
