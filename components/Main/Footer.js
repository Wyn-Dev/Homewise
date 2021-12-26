import React from "react"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className='footerStyle'>
      <div>
        <p>
          <span>Homewise Construction</span>
          <br />
          1005 W Edgar Ave.
          <br />
          Effingham, IL 62401
        </p>
      </div>

      <div>
        <p>FOLLOW US:</p>
        <Link
          href='https://www.facebook.com/homewiseconstruction/'
          passHref={true}>
          <div className='sm-icons'>
            <Image
              className='gb'
              src='/images/icons/fb.png'
              alt='facebook'
              width={25}
              height={25}
            />
          </div>
        </Link>
        <Link
          href='https://instagram.com/homewiseconstruction/'
          passHref={true}>
          <div className='sm-icons'>
            <Image
              src='/images/icons/ig.png'
              alt='facebook'
              width={25}
              height={25}
            />
          </div>
        </Link>
      </div>
      <div>
        <p>GET IN TOUCH:</p>
        <tel>tel: (217) 259-4808</tel>
      </div>
    </footer>
  )
}

export default Footer
