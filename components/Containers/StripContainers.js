import React from "react"

function StripContainers({ children }) {
  return <div className='card'>{children}</div>
}

export default StripContainers
