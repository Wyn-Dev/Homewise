import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"

function kitchenRemodel() {
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
        <div className='prevnext'>
          <Link href='/03-project-side-deck-and-entrances'>
            <a>Previous Project</a>
          </Link>
          <Link href='/05-project-houseaddition'>
            <a>Next Project</a>
          </Link>
        </div>
        <h1> \ Kitchen Remodel</h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p4/P4-00.jpg'
            alt='Homewise Construction. This image shows the fencing light residential construction work along the permieter of the backyard.'
          />
          <Image
            src='/images/projects/p4/P4-01.jpg'
            alt='Homewise Construction. This image shows thee fencing along the perimeter of the backyard.'
          />
          <Image
            src='/images/projects/p4/P4-02.jpg'
            alt='Homewise Construction. This image shows the completed fencing project. '
          />
          <Image
            src='/images/projects/p4/P4-03.jpg'
            alt='Homewise Construction. This image shows the completed fencing project. '
          />{" "}
          <Image
            src='/images/projects/p4/P4-04.jpg'
            alt='Homewise Construction. This image shows the completed fencing project. '
          />{" "}
          <Image
            src='/images/projects/p4/P4-05.jpg'
            alt='Homewise Construction. This image shows the completed fencing project. '
          />{" "}
          <Image
            src='/images/projects/p4/P4-06.jpg'
            alt='Homewise Construction. This image shows the completed fencing project. '
          />
        </div>
        <div className='projectLower'>
          <h2> \ Kitchen Remodel</h2>
          <div className='projectLowerCol'>
            <p>
              Kitchen remodeling can be a good sized project to take on. On this
              particular project, we had a simple revision to that the family
              had in mind. The kitchen has modern appliances, modern lighting,
              and just a modeern loook overall. But the wall space between the
              counter and cabinets seemed out of place with the design of the
              rest of the kitchen.
            </p>
            <p>
              The idea was to add stone along the wall of the kitchen, giving it
              an extra punch of design to the way the kitchen looks. We used
              XXXXX stone that matches with the countertop and the colors of the
              kitchen. When you walked into the room before, you might not have
              noticed the wall space. When you look at it know, the entire
              kitchen looks sharp and modern.
            </p>
            <p>
              This project shows that little touches have a big impact on the
              overall look of your kitchen. You can have a number of modern
              appliances and modern amenities but without the right details, it
              can feel like it has something missing. With the addition of stone
              masonry, it made the entire kitchen come together and the final
              product shows that.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default kitchenRemodel
