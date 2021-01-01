import React from 'react'

const Header = ({mainHeading,subHeading}) => {
  return(
    <div>
      <h1>{mainHeading}</h1>
      <h2>{subHeading}</h2>
</div>
  )
}

export default Header