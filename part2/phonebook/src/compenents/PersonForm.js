import React from 'react'

const PersonForm = (
  {
  addperson,
  nameChange,
  name,
  phoneNumber,
  numberChange
}) => {
  return(
    <form onSubmit={addperson}>
        <div>
         
          name: 
          <input onChange={nameChange}
            value={name}/>
          <br/>
          number: 
          <input value={phoneNumber}
            onChange={numberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm