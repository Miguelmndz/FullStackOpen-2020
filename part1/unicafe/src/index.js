import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Creates a Button
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick} > {text}</button>
  )
}

// Displays the statistics
const Statistics = ({good, neutral, bad}) => {
  const average = (good*1 + neutral*0 + bad*-1)/(good + neutral + bad)
  const all = good + neutral + bad
  const positive = (good/all)*100

  if(all == 0) return <div>No Feedback Given</div>
  
  return(
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="bad" value={bad} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive + "%"} />

    </div>
  )
}

const Statistic = ({text, value}) => {
  return(
    <div>
      {text} {value}
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1) 
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>

      
    </div>
  )

  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)