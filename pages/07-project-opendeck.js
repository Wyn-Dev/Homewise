import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

function opendeck() {
  return (
    <div className='projectsPage'>
      <Head>
        <title>Open Deck Build from Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. We made this deck out of treated lumber and composite wood. The joists, beams, and posts were made of treated lumber and the decking was made with composite wood. Aluminum railing was added along the perimeter of the deck.Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work. We are knnown for our deck builds along with general carpentry work.'
        />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
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
        <div className='prevnext'>
          <Link href='/06-project-bathroom-remodel'>
            <a>
              <FaArrowLeft /> Prev
            </a>
          </Link>
          <Link href='/08-project-room-remodel'>
            <a>
              Next <FaArrowRight />
            </a>
          </Link>
        </div>
        <h1> \ Open Flat Deck </h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p7/P7-00.jpg'
            alt='Homewise Construction. This image shows the deck being built at an early stage.'
          />
          <Image
            src='/images/projects/p7/P7-01.jpg'
            alt='Homewise Construction. This image shows the deck at a late phase with only boarding of the staircase still under construction.'
          />
          <Image
            src='/images/projects/p7/P7-02.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of our open flat deck light residential construction work project.'
          />
          <Image
            src='/images/projects/p7/P7-03.jpg'
            alt='Homewise Construction. This image shows the completed deck from another angle.'
          />
        </div>
        <div className='projectLower'>
          <h2> \ Open Flat Deck </h2>
          <div className='projectLowerCol'>
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
