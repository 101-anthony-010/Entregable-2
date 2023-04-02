import React from 'react'
import '/src/App.css'

const Loader = () => {
  return (
    <div className='fixed w-screen h-screen bg-gray-700 top-0 left-0 flex justify-center items-center flex-col'>
      <div className='cloud'></div>
      <div className='loader'></div>
    </div>
  )
}

export default Loader
