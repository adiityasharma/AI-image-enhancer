import React from 'react'

function ImagePreview() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 w-170 mb-5'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <h1 className='bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-2 font-semibold'>Original Image</h1>

        <div className='h-auto'>
          <img className='object-fill ' src="https://images.pexels.com/photos/32505992/pexels-photo-32505992.jpeg" alt="" />
        </div>

      </div>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <h1 className='bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-2 font-semibold'>Enhanced Image</h1>
      </div>
    </div>
  )
}

export default ImagePreview
