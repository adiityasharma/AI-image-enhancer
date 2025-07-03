import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

function Home() {

  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = (file)=>{
    console.log(URL.createObjectURL(file))
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
  }


  return (
    <div className='w-full p-4 md:p-0 md:w-200 text-center flex flex-col items-center'>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview upload={uploadImage} enhanced={enhancedImage} loading={loading} />
    </div>
  )
}

export default Home
