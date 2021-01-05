// import React, { useState } from 'react'
// import Note from './compenents/Note'

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note...'
//   ) 

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() > 0.5,
//       id: notes.length + 1,
//     }
  
//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note, i) => 
//           <Note key={i} note={note} />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
//           value={newNote}
//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>   
//     </div>
//   )
// }

// export default App 
import React, { useState } from 'react'
import Person from './compenents/Person'

const App = () => {
  // set state as an array of objects
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  // control for input and allows use to keep track of what's inside
  const [ newName, setNewName ] = useState('Enter Name')

  const [newPhoneNum, setNewPhone] = useState('Enter Phone Number')

  // Once the event has been triggered, prevent the page from reloading 
  // Target allows get the HTML element where the event happened
  const addNewPerson = (event) => {
    // Prevent the default action of refershing the page
    event.preventDefault()
     // loop though the persons array and for each object compare the names to get the value true or false
    const personFound = persons.find(obj => obj.name === newName)
    // Will add this new object with the type name to the state of persons array
    const personObject = {
      name: newName,
      number: newPhoneNum
    }
    //ternary operater: if a person is found alert them otherwise add the person to the array of objects
    personFound ? window.alert(`${newName} is already added to the phonebook`) : setPersons(persons.concat(personObject))  
    // Will update the input state(newName) to an empty string
    setNewName('')
    setNewPhone('')
  }

  // This will allow changes to be made from the input
  // By keeping track the state that is changing
  // We have the input value declared to the state newName
  // Since it's a state it can only be changed through modify it though a state fuction
  // So we add a onChange handler that will call the fuction handleNameChange upon a change in input where the state is being updated by getting the value that's typed in the input
  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewPhone(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input 
          onChange={handleNameChange} 
          value={newName} 
          />

          number: <input value={newPhoneNum} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       {/* Loops through the persons array and for each elementthat's in the array, transform it to exicute a Persons compenent where it will display the name of that person */}
      {persons.map((person,i) => <Person key={i}  name={person} />)}
    </div>
  )
}

export default App
