// import React from 'react'
// import ReactDOM from 'react-dom'

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercise: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercise: 7
//       },
//       {
//         name: 'State of a component',
//         exercise: 14
//       }
//       ]
//   }
//   return (
//     <div>
//       <Header course = {course}/>
//       <Content course = {course}/>
//       <Total total = {course}/> 
//     </div>
//   )
// }

// const Header = (props) => {
//   console.log(props)

//   return(
//   <div>
//       <h1>{props.course.name}</h1>
//   </div>
//   )
// }

// const Part = (props) => {
//   console.log(props)

//   return (
//   <div>
//     <p>
//       {props.name} {props.exercise}
//     </p>
//   </div>
//   )
// }
// const Content = (props) => {
//     console.log(props)

//   return (
//   <div>
//     <Part name = {props.course.parts[0].name} exercise = {props.course.parts[0].exercise} />
//     <Part name = {props.course.parts[1].name} exercise = {props.course.parts[1].exercise} />
//     <Part name = {props.course.parts[2].name} exercise = {props.course.parts[2].exercise} />
//   </div>
//   )
// }

// const Total = (props) => {
//   return (
//   <div>
//     <p>Number of exercises {props.total.parts[0].exercise + props.total.parts[1].exercise + props.total.parts[2].exercise}</p>
//   </div>
//   )
// }

//ReactDOM.render(<App />, document.getElementById('root'))
///////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const Display = ({counter}) => <div>{counter}</div>
  


// const Button = ({handleClick, text}) => {
//   return(
//   <button onClick={handleClick}>
//     {text}
//   </button> 
//   )
// }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)
  
//   return (
//     <div>
//       <Display counter = {counter} />
//       <Button 
//        handleClick={increaseByOne}
//        text='plus' />
//       <Button 
//        handleClick={decreaseByOne}
//        text='minus' />
//       <Button 
//        handleClick={setToZero}
//        text='zero' />
//     </div>
//   )
// }
// ////////////////////////////////////////////
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join('-')}</p>
//     </div>
//   )
// }

// const History = ({allClicks}) => {

//   if (allClicks.length == 0) {
//     return (
//       <div>
//         The app is used by pressing the button
//       </div>
//     )
//   }

//   return (
//     <div>
//       Button press history: {allClicks.join('-')}
//     </div>
//   )

// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right,setRight] = useState(0)
//   const [allClicks, setClicks] = useState([])

//   const handleLeftClick = () => {
//     setClicks(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setClicks(allClicks.concat('R'))
//     setRight(right + 1)
//   }
//   return(
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button>
//       {right}
//       <History allClicks={allClicks}/>
//     </div>
//   )


// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const Notes = ({note}) => {
return(
  <li>
    {note.content}
  </li>
)
}


const App = ({ notes }) => {
  

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(notes => <Notes key={notes.id} note={notes}/>)}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
