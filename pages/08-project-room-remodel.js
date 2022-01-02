import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"

function opendeck() {
  return (
    <div>
      <Head>
        <title>Room Remodel from Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. This room required the usual steps of building any room, framing, drywall, and a nice paintjob at the end. Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work. We are known for our deck builds along with general carpentry work.'
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
          <Link href='/07-project-opendeck'>
            <a>Previous-Project</a>
          </Link>
          <Link href='/projects'>
            <a>Back to All Projects</a>
          </Link>
        </div>
        <h1> \ Room Remodel </h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p8/P8-00.jpg'
            alt='Homewise Construction. This image shows the deck being built at an early stage.'
          />
          <Image
            src='/images/projects/p8/P8-01.jpg'
            alt='Homewise Construction. This image shows the deck at a late phase with only boarding of the staircase still under construction.'
          />
          <Image
            src='/images/projects/p8/P8-02.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of our open flat deck light residential construction work project.'
          />
          <Image
            src='/images/projects/p8/P8-03.jpg'
            alt='Homewise Construction. This image shows the completed deck from another angle.'
          />
          <Image
            src='/images/projects/p8/P8-04.jpg'
            alt='Homewise Construction. This image shows the completed deck from another angle.'
          />{" "}
          <Image
            src='/images/projects/p8/P8-05.jpg'
            alt='Homewise Construction. This image shows the completed deck from another angle.'
          />{" "}
          <Image
            src='/images/projects/p8/P8-06.jpg'
            alt='Homewise Construction. This image shows the completed deck from another angle.'
          />
        </div>
        <div className='projectLower'>
          <h2> \ Room Remodel </h2>
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
