import React from "react"
import { Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <footer>
      <Col>
        <Row>
          <Col>
            <p>GET IN TOUCH:</p>
            <tel>tel: (217) 259-4808</tel>
          </Col>
          <Col>
            <p>
              <icon>instagram</icon>
              <icon>facebook</icon>
            </p>
          </Col>
          <Col>
            <p>
              1005 W Edgar Ave.
              <br />
              Effingham, IL 62401
            </p>
          </Col>
        </Row>
      </Col>
    </footer>
  )
}

export default Footer
