import React from 'react'

const Header = ({header}) => {
  return(
    <div>
      <h1>
      {header.name}
      </h1>
    </div>
  )
}

export default Header