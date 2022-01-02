import React from "react"
import Image from "next/image"
import Link from "next/link"
function Footer() {
  return (
    <footer className='footerStyle'>
      <div>
        <h5>GET IN TOUCH:</h5>

        <p>
          Homewise Construction
          <br />
          1005 W Edgar Ave.
          <br />
          Effingham, IL 62401
        </p>
      </div>

      <div>
        <div className='sm-icons'>
          <a
            href='https://www.facebook.com/homewiseconstruction/'
            target={"_blank"}
            rel={"noreferrer"}>
            <Image
              className='gb'
              src='/images/icons/fb.png'
              alt='facebook'
              width={25}
              height={25}
            />
          </a>
        </div>
        <div className='sm-icons'>
          <a
            href='https://www.instagram.com/homewiseconstruction/'
            target={"_blank"}
            rel={"noreferrer"}>
            <Image
              className='gb'
              src='/images/icons/ig.png'
              alt='facebook'
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
      <div>
        <a href='mailto:info@gohomewisellc.com'>
          email: info@gohomewisellc.com
        </a>
        <br />
        <a href='tel:217-259-4808' className='telephone'>
          <tel>tel: (217) 259-4808</tel>
        </a>
      </div>
    </footer>
  )
}

export default Footer
