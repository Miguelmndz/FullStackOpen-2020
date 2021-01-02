import React from 'react'
import Content from './Content';
import Header from "./Header";
import Total from './Total'
const Course = ({course}) => {
  
  return(
    <div>
      
      <Header subHeading={course.name}/>
      <Content course={course.parts}/>
      <Total course={course.parts}/>

    </div>
  )
}

export default Course