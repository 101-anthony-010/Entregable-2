import React, { useState } from 'react'

const Dark = ({dark}) => {

  return (
    <div className='my-auto ml-2'>
      <button className='dark:text-white' onClick={dark}><i className='bx bxs-moon text-xl' ></i></button>
    </div>
  )
}

export default Dark
