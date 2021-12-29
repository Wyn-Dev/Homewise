import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
function onestep() {
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
            src='/images/projects/p3/P3-00.jpg'
            alt='Homewise Construction. This image shows the deck with one step in the final stages of light residential construction work.'
          />
          <Image
            src='/images/projects/p3/P3-01.jpg'
            alt='Homewise Construction. This image shows the deck from another angle.'
          />
          <Image
            src='/images/projects/p3/P3-02.jpg'
            alt='Homewise Construction. This image shows the completed deck for the light residential construction work.'
          />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h1> \ Step Deck</h1>
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
