import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"
import Link from "next/link"

function lakeside() {
  return (
    <div>
      <Head>
        <title>Lakeside Deck Construction from Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. The deck was made of treated lumber for all posts, joists, and beams as well as the decking. Aluminum railing was installed along the perimeter of the deck.'
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
          <Link href='/01-project-roofed-deck'>
            <a>Previous Project</a>
          </Link>
          <Link href='/03-project-side-deck-and-entrances'>
            <a>Next Project</a>
          </Link>
        </div>
        <h1> \ Lakeside Deck</h1>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p2/P2-00.jpg'
            alt='Homewise Construction. This image shows the home after the existing deck was removed.'
          />
          <Image
            src='/images/projects/p2/P2-01.jpg'
            alt='Homewise Construction. This image shows the wooden deck being built at a very early stage.'
          />
          <Image
            src='/images/projects/p2/P2-02.jpg'
            alt='Homewise Construction. This image shows the deck overlooking the lake.'
          />
          <Image
            src='/images/projects/p2/P2-04.jpg'
            alt='Homewise Construction. This image shows a view from the deck looking down at the lake. '
          />
          <Image
            src='/images/projects/p2/P2-06.jpg'
            alt='Homewise Construction. This image shows a view of the house with the deck in full view. '
          />
          <Image
            src='/images/projects/p2/P2-07.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of the lakeside light residential construction work. '
          />
          <Image
            src='/images/projects/p2/P2-08.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of the lakeside light residential construction work. The deck is shown from an angle.'
          />
          <Image
            src='/images/projects/p2/P2-03.jpg'
            alt='Homewise Construction. This image shows the completed deck as part of the lakeside light residential construction work. The deck is shown from a west-facing angle looking east. '
          />
        </div>
        <div className='projectLower'>
          <h2> \ Lakeside Deck</h2>
          <div className='projectLowerCol'>
            <p>
              An amazing view comes with a home by the lake. When you have a
              home by a lake, one of the many comforts is enjoying the view you
              can get from having a nice deck overlooking your property and the
              lake. With this project, the client wanted a deck that didn&apos;t
              obstruct the view of the lake below. So we started with that in
              mind. The idea was to have the deck blend in with the landscaping
              of the beautiful backyard and a great view of the lake below.
            </p>
            <p>
              The deck was built with traditional wood from top to bottom. Many
              of our projects will combine traditional treated wood and
              composite wood. This deck was all wood and it looks great. This is
              the type of light residential construction really shows the value
              that is added to a home. Beams, joists, and posts were built with
              treated pine wood giving it a durable material that will last.
              Aluminum railing was used around both the main perimeter as well
              as the side perimeter with an large walkup opening.
            </p>
            <p>
              The landscape had some great natural curves along the bank leading
              down to the lake. This deck provides a great view of the lake,
              blends in with the landscape and the home. Coming into this
              project we knew we would make something really great and it shows
              by the way the deck feels like it a part of the house. It blends
              into the house and you couldn&apos;t imagine this home without
              seeing it with this deck.
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default lakeside
