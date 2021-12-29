import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
function houseaddition() {
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
            src='/images/projects/p5/P5-00.jpg'
            alt='Homewise Construction. This image shows the initial stage of the house addition build along the back part of the house.'
          />
          <Image
            src='/images/projects/p5/P5-01.jpg'
            alt='Homewise Construction. This image shows the initial stage of the house from another angle.'
          />
          <Image
            src='/images/projects/p5/P5-02.jpg'
            alt='Homewise Construction. This image shows the completed exterior of our light residential construction work for the house addition project.'
          />
          <Image
            src='/images/projects/p5/P5-03.jpg'
            alt='Homewise Construction. This image shows the exterior of the house addition project. '
          />
          <Image
            src='/images/projects/p5/P5-04.jpg'
            alt='Homewise Construction. This image shows the interior of the house addition light residential construction project.'
          />
          <Image
            src='/images/projects/p5/P5-05.jpg'
            alt='Homewise Construction. This image shows the interior of the house addition from another angle.'
          />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h1> \ House Addition & Split side Deck</h1>
          </div>
          <div className='projectLowerp'>
            <p>
              The homes we work with always have something unique about the
              project. This particular project gave us an opportunity to blend
              our specialty of making decks with another of our specialties,
              room additions. We built this house addition with two things in
              mind, growth and expansion. The idea was to grow the inside of the
              home by extend the existing living room and expand the house and
              walking area with the deck. The room had a number of finishing
              touches that make the room look like it was always a part of the
              house. The deck provides space for viewing the large wooded
              backyard area.{" "}
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default houseaddition
