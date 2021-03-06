import React from "react"
import Head from "next/head"
function services() {
  return (
    <div className='servicesPage'>
      <Head>
        <title>Services | Homewise Construction</title>
        <meta
          name='description'
          content='Homewise Construction offers a number services in light residential construction. Home additions, decks, proches, bathroom renovations, kitchen remodeling, a number of other services are offered by Homewise Construction.'
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
      <h1>\ Exclusive Services</h1>
      <div>
        <h4> \ Home Additions</h4>
        <p>
          In need of more space for your home? We&apos;ll build the space
          you&apos;ve been thinking of to make your home a home.
        </p>
      </div>
      <div>
        <h4> \ Decks and Porches</h4>
        <p>
          We specialize in making unique decks to fit the design of your home.
          Our decks are made with high quality lumber to add value to your home.
        </p>
      </div>
      <div>
        <h4>\ Bathroom Renovations</h4>
        <p>
          Why not make your bathroom a more beautiful, relaxing, and comfortable
          part of your home. We can make your bathroom into a place you want to
          spend time in.
        </p>
      </div>
      <div>
        <h4>\ Kitchen Remodeling</h4>
        <p>
          We know kitchens are like the unofficial family room of the home. Make
          into a more functional space for your growing needs.
        </p>
      </div>
      <div>
        <h4>\ Odds and Ends</h4>
        <p>
          If your house needs something done, repair or addition, we can make it
          happen. This is a small list of what we can do, just to give you an
          idea.
        </p>
        <ul>
          <li>
            <li>Bathroom Renovation & Renovation </li>
            <li>Carpentry</li>
            <li>Complete remodeling</li>
            <li>Decks</li>
            <li>Demolition</li>
            <li>Drywall</li>
            <li>Fencing</li>
            <li>Floor Plan Alteration</li>
            <li>Flooring</li>
            <li>Home Additions</li>
            <li>Home Interior</li>
            <li>Kitchen Remodeling</li>
            <li>Renovation</li>
            <li>Room Additions</li>
            <li>Siding</li>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default services
