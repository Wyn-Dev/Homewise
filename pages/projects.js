import React from "react"
import Link from "next/link"
import Head from "next/head"
import { Image, Row, Col, Container } from "react-bootstrap"

function projects() {
  return (
    <div className='projects'>
      <Head>
        <title>Projects at Homewise Construction</title>
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
      <h1> \ Projects</h1>
      <p>
        This is a small collection of the projects we completed over the last
        few years. We complete a number a projects per year and will show the
        work here.{" "}
      </p>
      <Container>
        <Row>
          <Col>
            <Link href='/01-project-roofed-deck'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P1-06.jpg'
                  fluid
                  alt='Homewise Construction. This image shows the completed roof and deck project overlooking the backyard. '
                />
              </a>
            </Link>
          </Col>
          <Col>
            <Link href='/02-project-lakeside'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P2-03.jpg'
                  fluid
                  alt='Homewise Construction. This image shows the completed lakeside project. '
                />
              </a>
            </Link>
          </Col>
          <Col>
            <Link href='/03-project-side-deck-and-entrances'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P3-04.jpg'
                  fluid
                  alt='Homewise Construction. This image shows the completed one step deck project.'
                />
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href='/04-project-fencing'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P4-02.jpg'
                  alt='Homewise Construction. This image shows the completed fecning project.'
                  fluid
                />
              </a>
            </Link>
          </Col>
          <Col>
            <Link href='/05-project-houseaddition'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P5-05.jpg'
                  alt='Homewise Construction. This image shows the interior of the completed house addition project.'
                  fluid
                />
              </a>
            </Link>
          </Col>
          <Col>
            <Link href='/06-project-deckblend'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P6-04.jpg'
                  alt='Homewise Construction. This image shows the completed backyard deck blend project.'
                  fluid
                />
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href='/07-project-opendeck'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P7-Final.jpg'
                  alt='Homewise Construction. This image shows the completed open deck project.'
                  fluid
                />
              </a>
            </Link>
          </Col>
          <Col></Col>
          <Col>
            <p>Check back every month, we have new projects every month.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default projects
