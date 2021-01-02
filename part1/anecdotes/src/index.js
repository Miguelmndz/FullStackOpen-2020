import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let animals = [
  {name:'fig' , species: 'rabbit'},
  {name:'BIG' , species: 'dog'},
  {name:'car' , species: 'cat'},
  {name:'rawr' , species: 'cat'}
  
]


var names = animals.map( animals => animals.name === 'rawr' )


const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const App = ({anecdotes}) => {
  const emptyArray = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(emptyArray)
  const [vote, setVoted] = useState(0)

  const handleClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const handleVote = () => {
    
    const pointsCopy = [...points]
    pointsCopy[selected] += 1

    setPoints(pointsCopy)
     // If the array element is greater at the random selected value than the mostVoted value
     // then pass that into the modifying state fuction for mostVoted
     // this will allow you keep that index postion to display the most voted anecdote 
    if(pointsCopy[selected] > pointsCopy[vote]) 
      setVoted(selected)

  }
  return (
    <div>
      <h2>Anecdote of the day</h2>

      <p>{anecdotes[selected]}. 
      <br/>Has {points[selected]} votes.</p>

      <Button handleClick={handleClick} text="next anecdotes"/>
      <Button handleClick={handleVote} text="vote"/>
      
      
      <h2>Anecdote with most votes</h2>
      {anecdotes[vote]}
      
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


Get Most Votes

Need to check which qoute has the highest point count
Need to get that vote to display 

i have the max but dont have the index postion to display



*/