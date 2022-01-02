import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import StripsContainer from "../components/Containers/StripContainers"
import Head from "next/head"
function About() {
  return (
    <div className='about'>
      <Head>
        <title>About | Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. We started out business in 2018 and have over 20 years of experience in carpentry and construction. Light Residential construction in Effingham county. We serve the Effingham community through light residential construction work. We are known for our deck builds along with general carpentry work.'
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
      <Container>
        <h1>\ About Us</h1>
        <div className='aboutInner'>
          <h2>\ The History</h2>
          <p>
            Since 2018, Homewise Construction has built on it&apos;s 40 years of
            combined experience to provide Effingham County with a level of
            quality in home construction that is unparalleled. The story starts
            back in 1993 when Jim Pagone and Greg Smith worked together at Don
            Boggs Construction. Folks in the area know the quality Don Boggs is
            known for. We continue that tradition of providing high quality
            craftsmanship into Homewise.
          </p>
          <p>
            With the wide scope of construction work available, we focused on
            residential homes to become highly specialized and skilled at
            providing exactly what our clients want. Decks have also become our
            main specialty here in Effingham.
          </p>
          <h2>\ The Work</h2>
          <p>
            Construction work is in our blood, we really believe &ldquo;No job
            too big or to small&ldquo;. We take on just right amount of work to
            keep busy but never compromise the quality of the work. We build
            additions to homes, specializing in decks, with a wide range of
            additions, renovations, and remodels in between. Those extras can be
            roofliness, railings, stairs, built-in hot tubs. We customize and
            personalize to our clients wants to make the best looking decks
            you&apos;ll find in Effingham and surrounding towns.
          </p>
        </div>
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
      <h2>\ Our Team</h2>
      <Container>
        <Row>
          <Col>
            <Image
              className='imageB'
              src='/images/bio/Bio-Jim.jpg'
              alt='Jim Pagone. Homewise Construction. Jim is a partner at Homewise Construction.'
            />
          </Col>
          <Col>
            <div className='fullname'>
              <h3>Jim Pagone</h3>
              <h4>Partner</h4>
            </div>
            <p>
              Jim&apos;s been in the construction business since 1990 and has
              been at it ever since. Residential and light commercial work is
              where Jim started and took to the residential work more and more.
              Since then, Jim&apos;s built countless home additions along with
              many specialized projects in Effingham and surrounding counties.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image
              className='imageB'
              src='/images/bio/Bio-Greg.jpg'
              alt='Greg Smith. Homewise Construction. Greg is a parter at Homewise Construction.'
            />
          </Col>
          <Col>
            <div className='fullname'>
              <h3>Greg Smith</h3>
              <h4>Partner</h4>
            </div>
            <p>
              Greg worked for 18 years at World Color Press and all the while,
              since 1986 worked part time in construction. In 1990, that&apos;s
              when Greg and Jim met and built a friendship that lead to that
              partnership that is Homewise.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image
              className='imageB'
              src='/images/bio/Bio-Jim.jpg'
              alt='Justin Kresin. Homewise Construction. Justin is a construction technician at Homewise Construction.'
            />
          </Col>
          <Col>
            <div className='fullname'>
              <h3>Justin Kresin</h3>
              <h4>Construction Tech</h4>
            </div>
            <p>
              Justin has done light construction, heating and air, and small
              residential projects over the last few years. As part of Homewise,
              Justin is the go to guy for every job.
            </p>
          </Col>
        </Row>
        <Row>
          <div className='empty'></div>
        </Row>
      </Container>
    </div>
  )
}

export default About
