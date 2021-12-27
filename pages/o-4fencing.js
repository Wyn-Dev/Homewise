import React from "react"
import ProjectsContainer from "../components/Containers/ProjectsContainers"
import { Image } from "react-bootstrap"
import Head from "next/head"

function fencing() {
  return (
    <div>
      <Head>
        <title>About Homewise Construction</title>
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
      <ProjectsContainer>
        <div className='imagesContainer'>
          <Image
            src='/images/projects/p4/P4-00.jpg'
            alt='Homewise Construction. This image shows the fencing light residential construction work along the permieter of the backyard.'
          />
          <Image
            src='/images/projects/p4/P4-01.jpg'
            alt='Homewise Construction. This image shows thee fencing along the perimeter of the backyard.'
          />
          <Image
            src='/images/projects/p4/P4-02.jpg'
            alt='Homewise Construction. This image shows the completed fencing project. '
          />
        </div>
        <div className='projectLower'>
          <div className='projectLowerh2'>
            <h2>Perimeter Fencing</h2>
          </div>
          <div className='projectLowerp'>
            <p>
              Privacy is hard to come by in the city, but fencing can help you
              get it back. Whether you need privacy, a safe place for your kids
              or pets to run around, fences provide a peace of mind you
              can&apos;t get anywhere else.{" "}
            </p>
          </div>
        </div>
      </ProjectsContainer>
    </div>
  )
}

export default fencing
