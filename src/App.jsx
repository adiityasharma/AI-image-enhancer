import React from 'react'
import Home from './components/Home'

function App() {
  return (
    <div className='w-full flex flex-col items-center justify-center min-h-screen md:bg-gray-100 md:py-8 md:px-4 py-2 '>
      <div className='text-center md:mb-5'>
        <h1 className='text-5xl font-bold pb-4 bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent' >AI Image Enhancer</h1>
        <p className='bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent md:text-2xl text-xl font-semibold'>Upload your image and AI will give you enhance version of Image</p>
      </div>
        <Home/>
      <div className='text-lg text-gray-500'>
        <h1>Powered By @Aditya</h1>

      </div>
    </div>
  )
}

export default App
