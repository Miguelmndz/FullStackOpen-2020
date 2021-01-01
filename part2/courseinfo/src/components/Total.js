import React from 'react' 

const Total = ({course}) => {

  const sum = course.reduce((result, item) => result += item.exercises, 0)

  return(
    <div>
      <b>Total of {sum} exercises</b>
    </div>
  )
}

export default Total