import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

function sidedeck() {
  return (
    <div className='projects'>
      <Head>
        <title>Side Deck from Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. This project was built with a combination of composite and treated lumber. Composite wood was installed for the decking and treated lumber was used for the infrastructure of joist, beams, and posts. Aluminum railing was installed for the perimeter and staircase. The front and back entrances were built with the same materials'
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
          <Link href='/02-project-lakeside'>
            <a>
              <FaArrowLeft /> Prev
            </a>
          </Link>
          <Link href='/04-project-kitchen-remodel'>
            <a>
              Next <FaArrowRight />
            </a>
          </Link>
        </div>
        <h1> \ Side Deck and Entrances</h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p3/P3-00.jpg'
            alt='Homewise Construction. .'
          />
          <Image
            src='/images/projects/p3/P3-01.jpg'
            alt='Homewise Construction. .'
          />
          <Image
            src='/images/projects/p3/P3-02.jpg'
            alt='Homewise Construction. .'
          />
          <Image
            src='/images/projects/p3/P3-03.jpg'
            alt='Homewise Construction. .'
          />{" "}
          <Image
            src='/images/projects/p3/P3-04.jpg'
            alt='Homewise Construction. .'
          />{" "}
          <Image
            src='/images/projects/p3/P3-05.jpg'
            alt='Homewise Construction. .'
          />{" "}
          <Image
            src='/images/projects/p3/P3-06.jpg'
            alt='Homewise Construction. .'
          />{" "}
          <Image
            src='/images/projects/p3/P3-07.jpg'
            alt='Homewise Construction. .'
          />{" "}
          <Image
            src='/images/projects/p3/P3-08.jpg'
            alt='Homewise Construction. .'
          />
        </div>
        <div className='projectLower'>
          <h2> \ Side Deck and Entrances</h2>
          <div className='projectLowerCol'>
            <p>
              When we do a project, moree than one area of the house may need
              work. This project had a few things that needed to come together
              to make the main part, the deck, complete. The existing deck was
              made quite a ways back and it had run it&apos;s course. We were
              giving the deck and other structures around the house a facelift.
              With this project, we had do a couple of unique things to make it
              work.
            </p>
            <p>
              The existing deck on the side of the house has a great view of the
              neighborhood and looks like a great place to be any time of the
              year. The main deck was built with a combination of composite wood
              used for the deck surface and traditional pine wood for all of the
              support structures. Aluminum railing was used around the perimeter
              of the deck as well as the steps leading down to the ground level.
              We made custom spokes that fit along the stairwell. Then we had
              the front entrance that needed new railing. We used aluminum
              railing closer to the house while on the other side of the
              walkway, it was left exposed to blend in with the shrubs that line
              the frontyard. Last, we had the back entrance to modernize with
              the same materials of composite wood, traditional wood, and
              aluminum railing.
            </p>
            <p>
              All in all, this project turned out great and it has a complete
              feel to it. Had the front or the back entrance not been rennovated
              along with the deck, something might have looked out of place.
              Fortunately, all of the exterior aspects needed rennovation and we
              brought it all together in the end.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default sidedeck
