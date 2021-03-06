import Head from "next/head"
import StripContainers from "../components/Containers/StripContainers"
import HomePageProjectContainers from "../components/Containers/HomePageProjectContainers"

function Home() {
  return (
    <div className='maingrid'>
      <Head>
        <title>Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction. Light residential construction work is our speciality. Home additions, decks, proches, bathroom renovations, kitchen remodeling, a number of other services are offered by Homewise Construction.'
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
      <main>
        <div
          className='maintext strip '
          style={{ backgroundColor: "rgba(0,0,0,0)" }}>
          <h1>
            No Job
            <br />
            Too Big
            <br />
            Or
            <br />
            Too Small
          </h1>
        </div>
        <StripContainers>
          <h2>Proudly serving Effingham County</h2>
          <div className='line'></div>
          <p>
            We like to make homes look their best.
            <br /> Taking care of all your home maintenance needs is all in a
            day&apos;s work for us. <br />
            Take a look at the kinds of projects we work on.
          </p>
        </StripContainers>
        <StripContainers>
          <div className='services'>
            <h2>Our Services</h2>
            <div className='line'></div>
            <p>
              Some of the things we like to do... <br /> Home maintenance,
              decking, siding, flooring, door installation, sheet rock
              installation and repair,
              <br />
              entry and exterior door replacement, roofing construction and
              repair <br /> ...basically any issue that your home may have, we
              can help with. <br /> Here&apos;s a list of what you can call on
              us to do:
            </p>

            <list>
              <ul>
                <li>Bathroom Renovation & Renovation </li>
                <li>Carpentry</li>
                <li>Complete remodeling</li>
                <li>Decks</li>
                <li>Demolition</li>
                <li>Drywall</li>
                <li>Fencing</li>
              </ul>
            </list>
            <list>
              <ul>
                <li>Floor Plan Alteration</li>
                <li>Flooring</li>
                <li>Home Additions</li>
                <li>Home Interior</li>
                <li>Kitchen Remodeling</li>
                <li>Renovation</li>
                <li>Room Additions</li>
                <li>Siding</li>
              </ul>
            </list>
          </div>
        </StripContainers>
        <StripContainers>
          <div className='ethic'>
            <h2>Our Ethic</h2>
            <div className='line'></div>
            <p>
              Quality is never an accident; <br /> It is always the result of
              high intention, sincere effort, intelligent direction and skillful
              execution; <br /> It represents the wise choice of many
              alternatives.
              <br />
              -William A Foster
            </p>
          </div>
        </StripContainers>

        <StripContainers>
          <div>
            <h2>Places We Serve</h2>
            <div className='line'></div>

            <div>
              <p>
                Based out of Effingham County, we travel to the following areas:
              </p>
            </div>
            <ul>
              <li>Effingham</li>
              <li>Altamont</li>
              <li>Funkhouser</li>
              <li>Heartville</li>
              <li>Watson</li>
              <li>Teutopolis</li>
            </ul>
          </div>
        </StripContainers>
        <HomePageProjectContainers></HomePageProjectContainers>
      </main>
    </div>
  )
}

export default Home
