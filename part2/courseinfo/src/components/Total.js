import React from 'react' 

const Total = ({course}) => {

  // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises

  const sum = course.parts.reduce((result, item) => result += item.exercises, 0)

  return(
    <div>
      <b>Total of {sum} exercises</b>
    </div>
  )
}

export default Total