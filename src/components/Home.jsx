import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/EnhancedImageApi';

function Home() {

  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false)

  const uploadImageHandler = async (file)=>{
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)

    try {
      const enhancedURL = await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  return (
    <div className='w-full p-4 md:p-0 md:w-200 text-center flex flex-col items-center'>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview upload={uploadImage} enhanced={enhancedImage} loading={loading} />
    </div>
  )
}

export default Home
