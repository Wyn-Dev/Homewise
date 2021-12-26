import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"

function onestep() {
  return (
    <div>
      <Head>
        <title>One Step Deck from Homewise Construction</title>
        <meta
          name='description'
          content='Top light residential construction in Effingham county'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image src='/images/projects/p3/P3-00.jpg' alt='image' />
          <Image src='/images/projects/p3/P3-01.jpg' alt='image' />
          <Image src='/images/projects/p3/P3-02.jpg' alt='image' />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2>Step Deck</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              The focus of this deck was to provide a minimal footprint, give
              functionality where it was needed, and just give a warmer, softer
              feel to the deck from what was there before. We poured new
              concrete that gave a foundation to the new hot tub for the home.
              The end product was exactly what the client wanted.{" "}
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default onestep
