import React from 'react'
import Part from './Parts'

const Content = ({course}) => {
  return(
    <div>
      <Part name={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part name={course.parts[2].name} exercise={course.parts[2].exercises} />
    </div>
  )
}

export default Content