import React from 'react'

const Filter = ({onChangeValue, getValue}) => {
  return(
    <div>
      <input onChange={onChangeValue} value={getValue}/>
    </div>
  )
}

export default Filter