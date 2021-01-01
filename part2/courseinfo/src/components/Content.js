import React from 'react'
import Part from './Parts'


const Content = ({course}) => {
  return(
    <div>
      {course.map(part =>  <Part key={part.id} part={part}/>)}

    </div>
  )
}

export default Content