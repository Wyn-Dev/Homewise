import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"

function houseaddition() {
  return (
    <div>
      <Head>
        <title>House Addition Project from Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. This house addition construction project also required a deck. Aspects of the deck were built first to support the room addition. We focused on the inside of the home to make it functional for the family. This type of light residential construction is what we do and take pride in.'
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
          <Link href='/04-project-kitchen-remodel'>
            <a>Previous Project</a>
          </Link>
          <Link href='/06-project-bathroom-remodel'>
            <a>Next Project</a>
          </Link>
        </div>
        <h1> \ House Addition & Split side Deck</h1>
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
          <h2> \ House Addition & Split side Deck</h2>
          <div className='projectLowerCol'>
            <p>
              When we say we do light residential construction, this project
              shows you the scale of what that means. House additions are
              guaranteed to add value to your home and this house is no
              exception. This house addition included extending the existing
              living room of the house, building a deck that stretches the
              distance of the backpart of the house, window and door
              installations for the new room, and exterior and interior work to
              match the existing design of the house. We built this house
              addition with two things in mind, growth and expansion. The idea
              was to grow the inside of the home by extend the existing living
              room and expand the house and walking area with the deck. The room
              had a number of finishing touches that make the room look like it
              was always a part of the house.
            </p>
            <p>
              We began by building portions of the deck along with the support
              structure for the room extension. The focus was the room itself
              and getting it functional for the family to use as soon as
              possible. From there we built out the deck and exterior to add the
              functionality right away. From there all of the detail work that
              is necessary to make the project complete.
            </p>
            <p>
              If you are thinking of building more room inn your home to make
              more room or add value, take a look at this project and see what a
              difference it can make. We can help you make those ideas take
              shape and become a real part of your home.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default houseaddition
