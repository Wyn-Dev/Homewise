import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

function deckblend() {
  return (
    <div className='projectsPage'>
      <Head>
        <title> Bathroom Remodel from Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. We built this bathroom remodel to make a new shower area in this home. The framing and drywall took little time to complete. We tiled the bathroom and placed lighting to complete to project. Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work.'
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
          <Link href='/05-project-houseaddition'>
            <a>
              <FaArrowLeft /> Prev
            </a>
          </Link>
          <Link href='/07-project-opendeck'>
            <a>
              Next <FaArrowRight />
            </a>
          </Link>
        </div>
        <h1> \ Bathroom Remodel</h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p6/P6-00.jpg'
            alt='Homewise Construction. This image shows the original deck of the house.'
          />
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
          <Image
            src='/images/projects/p6/P6-05.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of our light residential construction work. '
          />{" "}
          <Image
            src='/images/projects/p6/P6-06.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of our light residential construction work. '
          />{" "}
          <Image
            src='/images/projects/p6/P6-07.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of our light residential construction work. '
          />
        </div>
        <div className='projectLower'>
          <h2> \ Bathroom Remodel</h2>
          <div className='projectLowerCol'>
            <p>
              Remodeling your home can bring up a lot of ideaas that you&apos;ve
              been thinking about. On this project, the family wanted to add an
              additional bathroom to their home.
            </p>
            <p>
              We began construction by framing the new bathroom area. The
              plumbing had been taken care of before we started one the build
              and all plumbing support was in place. We put up XXXX to provide
              the support needed to make the area waterproof. XXXX drywall was
              put in place to support the tilework that would need to be done
              next. After the tileworo was complete, the lighting was added to
              make the project commpelete.
            </p>
            <p>
              Bathroom additions are unique projects that require us to work
              with plumbers to get the job done right. If you&apos;re
              considering a bathroom addition, be ready to add a new dimension
              to your home. Bathroom additions add both needed function and
              value to your home.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default deckblend
