import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

function Home() {
  return (
    <div className='w-200 text-center flex flex-col items-center'>
      <ImageUpload/>
      <ImagePreview/>
    </div>
  )
}

export default Home
