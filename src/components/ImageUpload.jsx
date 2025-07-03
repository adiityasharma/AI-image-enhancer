import React from 'react'

function ImageUpload() {
  return (
    <div className='bg-white shadow-lg px-6 py-5 w-full max-w-2xl rounded-2xl'>
      <label htmlFor="selectFile" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-2xl hover:border-blue-500 transition-all'>
        <p className='px-5 py-3 hover:text-blue-600 transition-all'>Click or drag your image here to upload</p>
      </label>
      <input type="file" id='selectFile' className='hidden' />
    </div>
  )
}

export default ImageUpload
