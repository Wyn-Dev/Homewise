import React from "react"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className='footerStyle'>
      <div>
        <p>GET IN TOUCH:</p>
        <tel>tel: (217) 259-4808</tel>
      </div>
      <div>
        <p>FOLLOW US:</p>
        <Link
          href='https://www.facebook.com/homewiseconstruction/'
          passHref={true}>
          <Image
            src='/images/icons/fb.png'
            alt='facebook'
            width={20}
            height={20}
          />
        </Link>
        <Link
          href='https://instagram.com/homewiseconstruction/'
          passHref={true}>
          <Image
            src='/images/icons/ig.png'
            alt='facebook'
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div>
        <p>
          1005 W Edgar Ave.
          <br />
          Effingham, IL 62401
        </p>
      </div>
    </footer>
  )
}

export default Footer
