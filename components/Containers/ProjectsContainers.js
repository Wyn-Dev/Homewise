import React from "react"
import { Breadcrumb } from "react-bootstrap"

function ProjectsContainer({ children }) {
  return (
    <div className='projectContainer'>
      <Breadcrumb>
        <Breadcrumb.Item href='/projects' className='breadcrumb'>
          \ Back to Projects
        </Breadcrumb.Item>
      </Breadcrumb>
      {children}
    </div>
  )
}

export default ProjectsContainer
