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
        <link rel='icon' href='/favicon.ico' />
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
            <Link href='/o-1roofdeck'>
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
            <Link href='/o-2lakeside'>
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
            <Link href='/o-3onestep'>
              <a>
                <Image
                  className='imageP'
                  src='/images/projects/P3-02.jpg'
                  fluid
                  alt='Homewise Construction. This image shows the completed one step deck project.'
                />
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href='/o-4fencing'>
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
            <Link href='/o-5houseaddition'>
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
            <Link href='/o-6deckblend'>
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
            <Link href='/o-7opendeck'>
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
