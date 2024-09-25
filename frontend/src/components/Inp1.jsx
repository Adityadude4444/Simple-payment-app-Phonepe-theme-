import React from 'react'

function Input({placeholder,onchange}) {
  return (
    <div><input className='max-w-xl border p-2 w-full rounded-lg'placeholder={placeholder} onChange={onchange}></input></div>
    
  )
}

export default Input