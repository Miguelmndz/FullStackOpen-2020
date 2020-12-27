import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return(
    <div>
    <button onClick={handleClick}>{text}</button>
    </div>
  )
}


const App = ({anecdotes}) => {
  const emptyArray = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(emptyArray)
  
  

  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const voteClick = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1

    setPoints(pointsCopy)
  }
  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick={handleClick} text="next anecdotes"/>
      <Button text="vote" handleClick={voteClick}/>
      {points[selected]}
  
    
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

/* 
what we first did is create a state of an empty array of zeros
then need to create a handle to update the vote when the user clicks the button
since we want to update the state we create a copy of that state


1 




*/