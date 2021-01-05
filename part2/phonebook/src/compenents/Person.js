import React from 'react'

const Person = ({ name }) => {
  return (
    <li>{name.name} {name.number}</li>
  )
}

export default Person