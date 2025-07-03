import React from 'react'
import Home from './components/Home'

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1></h1>
        <p></p>
      </div>
        <Home/>
      <div className='text-lg text-gray-500'>
        <h1>Upload your image and AI will give you enhance version of Image</h1>

      </div>
    </div>
  )
}

export default App
