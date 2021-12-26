import React from "react"
import { Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <footer className='footerStyle'>
      <div>
        <p>GET IN TOUCH:</p>
        <tel>tel: (217) 259-4808</tel>
      </div>
      <div>
        <p>
          <icon>instagram</icon>
          <icon>facebook</icon>
        </p>
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
