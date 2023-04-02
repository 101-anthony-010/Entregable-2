import React, { useState } from 'react'

const Dark = ({dark}) => {

  return (
    <div>
      <button className='bg-white dark:bg-black dark:text-white' onClick={dark}>darkmode</button>
    </div>
  )
}

export default Dark
