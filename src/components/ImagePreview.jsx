import React from "react";

function ImagePreview(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 w-full md:w-170 mb-5">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-2 font-semibold">
          Original Image
        </h1>

        <div className="h-auto">
          {props.upload ? (
            <img className="object-fill " src={props.upload} alt="" />
          ) : (
            <p className="py-3 text-gray-500">No image uploaded</p>
          )}
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-2 font-semibold">
          Enhanced Image
        </h1>

        <div className="h-auto flex justify-center items-center">
          {props.loading ? (
            <div class="flex flex-row gap-2 py-10">
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
          ) : (
            <div className="h-auto">
              {props.upload ? (
                <img className="object-fill " src={props.enhanced} alt="" />
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
  );
}

export default ImagePreview;
