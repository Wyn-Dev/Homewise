import React from "react"

import Head from "next/head"

function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/FontsFree-Net-Lulo-Clean-W01-One-Bold.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      {children}
    </>
  )
}

export default Layout
