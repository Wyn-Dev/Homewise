import React from "react"
import { Image, Row, Col, Container } from "react-bootstrap"
function projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <Container>
        <Row>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P1-06.jpg'
              fluid
              alt='Homewise Construction'
            />
          </Col>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P2-03.jpg'
              fluid
              alt='Homewise Construction'
            />
          </Col>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P3-02.jpg'
              fluid
              alt='Homewise Construction'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P4-02.jpg'
              alt='Homewise Construction'
              fluid
            />
          </Col>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P5-05.jpg'
              alt='Homewise Construction'
              fluid
            />
          </Col>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P6-04.jpg'
              alt='Homewise Construction'
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              className='imageP'
              src='/images/projects/P7-Final.jpg'
              alt='Homewise Construction'
              fluid
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default projects
