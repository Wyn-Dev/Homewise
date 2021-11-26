import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import StripsContainer from "../components/Containers/StripContainers"
import BioContainer from "../components/Containers/BioContainer"

function About() {
  return (
    <div className='about'>
      <Container>
        <div className='aboutInner'>
          <Row>
            <h1>About Us</h1>
          </Row>
          <Row>
            <Col className='aboutUp'>
              <h2>The History</h2>
            </Col>
            <Col className='aboutUp'>
              <div>
                <p>
                  Since 2018, Homewise Construction has built on it&apos;s 40
                  years of combined experience to provide Effingham County with
                  a level of quality in home construction that is unparalleled.
                  The story starts back in 1993 when Jim Pagone and Greg Smith
                  worked together at Don Boggs Construction. Folks in the area
                  know the quality Don Boggs is known for. We continue that
                  tradition of providing high quality craftsmanship into
                  Homewise.
                </p>
                <p>
                  With the wide scope of construction work available, we focused
                  on residential homes to become highly specialized and skilled
                  at providing exactly what our clients want. Decks have also
                  become our main specialty here in Effingham.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col className='aboutUp'>
            <h2>The Work</h2>
          </Col>
          <Col className='aboutUp'>
            <div>
              <p>
                Construction work is in our blood, we really believe &ldquo;No
                job too big or to small&ldquo;. We take on just right amount of
                work to keep busy but never compromise the quality of the work.
                We build additions to homes, specializing in decks, with a wide
                range of additions, renovations, and remodels in between. Those
                extras can be roofliness, railings, stairs, built-in hot tubs.
                We customize and personalize to our clients wants to make the
                best looking decks you&apos;ll find in Effingham and surrounding
                towns.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <StripsContainer>
        <div className='ethic'>
          <h2 className='innertext'>Our Ethic</h2>
          <p>
            Quality is never an accident; <br />
            It is always the result of high intention, sincere effort,
            intelligent direction and skillful execution;
            <br />
            It represents the wise choice of many alternatives.
            <br />- <i>William A Foster</i>
          </p>
        </div>
      </StripsContainer>
      <div>
        <h1>Our Team</h1>
      </div>
      <BioContainer>
        <Container>
          <Row>
            <Col>
              <Image
                className='imageB'
                src='/images/bio/Bio-Jim.jpg'
                alt='Jim Pagone'
              />
            </Col>
            <Col>
              <div className='fullname'>
                <h2>Jim Pagone</h2>
                <h4>Partner</h4>
              </div>
              <p>
                Jim&apos;s been in the construction business since 1990 and has
                been at it ever since. Residential and light commercial work is
                where Jim started and took to the residential work more and
                more. Since then, Jim&apos;s built countless home additions
                along with many specialized projects in Effingham and
                surrounding counties.
              </p>
            </Col>
          </Row>
        </Container>
      </BioContainer>
      <BioContainer>
        <Container>
          <Row>
            <Col>
              <Image
                className='imageB'
                src='/images/bio/Bio-Greg.jpg'
                alt='Greg Smith'
              />
            </Col>
            <Col>
              <div className='fullname'>
                <h2>Greg Smith</h2>
                <h4>Partner</h4>
              </div>
              <p>
                Greg worked for 18 years at World Color Press and all the while,
                since 1986 worked part time in construction. In 1990,
                that&apos;s when Greg and Jim met and built a friendship that
                lead to that partnership that is Homewise.
              </p>
            </Col>
          </Row>
        </Container>
      </BioContainer>
      <BioContainer>
        <Container>
          <Row>
            <Col>
              <Image
                className='imageB'
                src='/images/bio/Bio-Jim.jpg'
                alt='Jim Pagone'
              />
            </Col>
            <Col>
              <div className='fullname'>
                <h2>Justin Kresin</h2>
                <h4>Construction Tech</h4>
              </div>
              <p>
                Justin has done light construction, heating and air, and small
                residential projects over the last few years. As part of
                Homewise, Justin is the go to guy for every job.
              </p>
            </Col>
          </Row>
        </Container>
      </BioContainer>
    </div>
  )
}

export default About
