import React, { useEffect, useState } from "react";

function ImagePreview(props) {
  const imageUrl = props.enhanced;

  const [allImage, setAllImage] = useState([]);
  const [fromLocal, setFromLocal] = useState([]);


  const storeToLocalStorage = (imageUrl) => {
    const id = Date.now().toString();
    window.localStorage.setItem(id, imageUrl);
    setAllImage((prev) => [id, ...prev]);
  };

  useEffect(() => {
    if (imageUrl) {
      storeToLocalStorage(imageUrl);
    }
  }, [imageUrl]);

  // ✅ Load all stored image URLs from localStorage on component mount
  useEffect(() => {
    const keys = Object.keys(window.localStorage);

    const urls = keys
      .map((key) => window.localStorage.getItem(key))
      .filter((url) => url !== null);

    setFromLocal(urls.reverse()); // Reverse for recent first
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 w-full md:w-170 mb-5">
        {/* Original Image */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-2 font-semibold">
            Original Image
          </h1>
          <div className="h-auto">
            {props.upload ? (
              <img className="object-fill" src={props.upload} alt="" />
            ) : (
              <p className="py-3 text-gray-500">No image uploaded</p>
            )}
          </div>
        </div>

        {/* Enhanced Image */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-2 font-semibold">
            Enhanced Image
          </h1>
          <div className="h-auto">
            {props.loading ? (
              <div className="flex flex-col gap-2 py-10 justify-center items-center">
                <div className="flex flex-row gap-2 pt-5 justify-center items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
                </div>
                <p className="font-semibold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
                  Enhancing...
                </p>
              </div>
            ) : (
              <div className="h-auto">
                {props.upload ? (
                  <img className="object-fill" src={props.enhanced} alt="" />
                ) : (
                  <p className="py-3 text-gray-500">
                    Enhanced Image will appear here
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recently Generated Images */}
      {fromLocal.length !== 0 && (
        <div>
          <h1 className="font-bold text-lg">Recently Generated Images:</h1>
          {fromLocal.map((img, index) => (
            <a
              className="block text-blue-700 truncate md:w-150 lg:w-150 w-85"
              key={index}
              href={img}
              target="_blank"
              rel="noopener noreferrer"
            >
              {img}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default ImagePreview;
