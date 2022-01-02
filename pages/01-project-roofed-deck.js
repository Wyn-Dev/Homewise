import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"

function roofdeck() {
  return (
    <div>
      <Head>
        <title>Roofed Deck Project from Homewise Construction</title>
        <meta
          name='description'
          content='Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work. We are knnown for our deck builds along with general carpentry work.'
        />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />

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
          <Link href='/projects'>
            <a>All Projects</a>
          </Link>
          <Link href='/02-project-lakeside'>
            <a>Next Project</a>
          </Link>
        </div>
        <h1> \ Roofed Deck</h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p1/P1-00.jpg'
            alt='Homewise Construction. This image contains initial construction for the roof and deck project.'
          />
          <Image
            src='/images/projects/p1/P1-01.jpg'
            alt='Homewise Construction. This image shows the beams, joist, and pillars in place for light residential construction.'
          />
          <Image
            src='/images/projects/p1/P1-02.jpg'
            alt='Homewise Construction. This image shows the initial framing of the deck.'
          />
          <Image
            src='/images/projects/p1/P1-03.jpg'
            alt='Homewise Construction. This image shows the roof attached to the new deck.'
          />
          <Image
            src='/images/projects/p1/P1-04.jpg'
            alt='Homewies Construction. This image shows a closeup image of the stone masonry wall as part of a rood and deck build.'
          />
          <Image
            src='/images/projects/p1/P1-05.jpg'
            alt='Homewise Construction. This image shows a closeup image of the railing attached to the deck.'
          />
          <Image
            src='/images/projects/p1/P1-06.jpg'
            alt='Homewise Construction. This image shows the completed deck with stained wood, overlooking the the backyard of this beautiful home.'
          />
        </div>
        <div className='projectLower'>
          <h2> \ Roofed Deck</h2>
          <div className='projectLowerCol'>
            <p>
              By the end of this project, we knew we made something really
              special. This family wanted a nice deck to overlook their backyard
              which is a nice view of the woods. They wanted to enjoy their deck
              area year round. With that in mind, A deck by itself is a good
              sized project, adding a roof would make it into a pretty good
              sized light residential construction project for us. The support
              structure was all made with treated southern yellow pine wood.
              That includes the pillars, joists, and beams. The decking itself
              was also built with traditional wood. But there were other details
              that were a part of the build.
            </p>
            <p>
              We added aluminum railing along the perimeter of the deck as well
              as the stairs leading to the ground level and the walkups on
              different sides of the house. The top of the railings was made of
              composite wood that lasts for a very long time. The railing also
              had a nice feature at night time. Each of the railing posts also
              have walk lights that make the deck light up at night time. The
              deck already looks great in the day but it looks even better with
              all the lights on at night.
            </p>
            <p>
              The roof was made like any traditional roof would be built and was
              made to blend in with the existing roof structure of the house.
              The inner paneling of the roof was stained and then coated with
              polyurethane. This particular wood had a brightness and the
              staining made it look that much warmer. Stone siding was added
              along the perimeter of the house. At the end, we added value to
              the home with all of the construction that gave the home a
              luxurious look.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default roofdeck
