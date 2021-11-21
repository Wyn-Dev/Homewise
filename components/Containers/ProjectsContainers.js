import React from "react"
import { Breadcrumb } from "react-bootstrap"

function ProjectsContainer({ children }) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href='/projects'>Projects</Breadcrumb.Item>
      </Breadcrumb>

      {children}
    </div>
  )
}

export default ProjectsContainer
