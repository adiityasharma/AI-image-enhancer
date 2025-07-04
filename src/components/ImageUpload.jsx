import React, { useState } from "react";

function ImageUpload(props) {

  
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setDragging(false)

    const droppedFile = e.dataTransfer.files[0];
    if(droppedFile){
      props.uploadImageHandler(droppedFile)
    }
  }

  const handleDragOver = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };




  const showImageHandler = (e)=>{
    const file = e.target.files[0]
    if(file){
      props.uploadImageHandler(file)
    }
  }


  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className="bg-white shadow-lg px-6 py-5 w-full max-w-2xl rounded-2xl">
      <label
        htmlFor="selectFile"
        className={`block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-2xl ${dragging? "border-blue-500" : ""} hover:border-blue-500 transition-all `}
      >
        <p className={`px-5 py-3 ${dragging? "text-blue-600" : ""} hover:text-blue-600 transition-all`} >
          Click or drag your image here to upload
        </p>
      </label>
      <input  onChange={showImageHandler} type="file" id="selectFile" className="hidden" />
    </div>
  );
}

export default ImageUpload;
