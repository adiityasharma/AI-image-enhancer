import React from "react";
import Home from "./components/Home";

function App() {


  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen md:bg-gray-100 md:py-8 md:px-4 py-2 md:mb-0 lg:py-8 pb-10">
      <div className="text-center md:mb-3">
        <h1 className="text-5xl font-bold pb-4 bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
          AI Image Enhancer
        </h1>
        <p className="bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent md:text-2xl text-xl font-semibold">
          Upload your image and AI will give you enhance version of Image
        </p>
      </div>
      <div className="text-gray-500 mb-3 text-sm lg:p-0 px-3">
        <p className="font-bold">Notice:</p>
        <ul>
          <li>
            <span className="font-semibold">Supported Images Format:</span> jpg, jpeg, bmp, png, webp, tiff, tif, bitmap, raw, rgb, jfif, lzw
          </li>
          <li><span className="font-semibold">Resolution:</span> Up to 4096 x 4096</li>
          <li><span className="font-semibold">File size:</span> Up to 15MB</li>
          <li>
            <p className="text-red-500 font-semibold">The URL of the result image is valid for 1 hour. Please download the
            image file promptly.</p>
          </li>
        </ul>
      </div>
      <Home />
      <div className="text-lg text-gray-400 absolute lg:bottom-2 lg:right-5 md:bottom-2 md:right-5 bottom-2 right-3">
        <a className="hover:text-blue-500" target="_blank" href="https://github.com/adiityasharma/AI-image-enhancer">Github: Aditya Sharma</a>
      </div>
    </div>
  );
}

export default App;
