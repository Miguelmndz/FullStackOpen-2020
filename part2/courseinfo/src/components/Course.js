import React from 'react'
import Content from './Content';
import Header from "./Header";
import Total from './Total'
const Course = ({course}) => {
  const obj1Heading = 'Web development curriculum'

  // const [ obj1, obj2 ] = course;
  // const { name } = obj1;
  // const { name } = course[0];
  return(
    <div>
      <Header mainHeading={obj1Heading} subHeading={course[0].name}/>
      <Content course={course[0].parts}/>
      <Total course={course[0].parts}/>

      <Header subHeading={course[1].name}/>
      <Content course={course[1].parts}/>
      <Total course={course[1].parts}/>
    </div>
  )
}

export default Course