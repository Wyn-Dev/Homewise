import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import Head from "next/head"

function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Lulo Clean W01 One Bold.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
