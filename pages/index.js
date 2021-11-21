import Head from "next/head"
import styles from "../styles/Home.module.css"
import StripContainers from "../components/Containers/StripContainers"
function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homewise Construction</title>
        <meta
          name='description'
          content='Residential construction in Effingham county'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='parallax'>
        <div>
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
          <p>
            We like to make homes look their best. Taking care of all your home
            maintenance needs is all in a day&apos;s work for us. Take a look at
            the kinds of projects we work on.
          </p>
        </StripContainers>
        <StripContainers>
          <h2>Our Ethic</h2>
          <p>
            Quality is never an accident; It is always the result of high
            intention, sincere effort, intelligent direction and skillful
            execution; It represents the wise choice of many alternatives. -
            William A Foster
          </p>
        </StripContainers>
        <StripContainers>
          <h2>Our Services</h2>
          <br />
          <p>
            Some of the things we like to do... Home maintenance, decking,
            siding, flooring, storm door installation, sheet rock installation
            and repair, entry and exterior door replacement, roofing
            construction and repair ...basically any issue that your home may
            have, we can help with. Here&apos;s a list of what you can call on
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
        </StripContainers>
        <StripContainers>
          <div>
            <h2>Places we serve</h2>
            <p>
              Based out of Effingham County, we travel to the following areas:
            </p>
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
      </main>
    </div>
  )
}

export default Home
