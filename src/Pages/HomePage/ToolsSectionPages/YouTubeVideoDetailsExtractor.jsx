import { useState } from "react";
import { IoSend } from "react-icons/io5";

const YouTubeVideoDetailsExtractor = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDetails, setVideoDetails] = useState([]);

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleYoutubeVideoExtractDetails = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/youtubeVideoLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ videoUrl }),
    });
    const data = await res.json();
    setVideoDetails(data);

    console.log(data);
  };

  const handleDownloadImage = async (image) => {
    console.log(image);
    const res = await fetch("http://localhost:5000/youtubeVideoThumbnailDownload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-gradient-to-r from-[#110D1E] via-[#1C112B] to-[#110D1E] min-h-screen flex items-center justify-center">
      <div className="bg-[#27243b] p-8 rounded-lg shadow-md w-full max-w-3xl">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Enter YouTube URL:</label>
          <form onSubmit={handleYoutubeVideoExtractDetails} className="relative flex items-center">
            <input
              type="text"
              value={videoUrl}
              onChange={handleInputChange}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full border p-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-[#110D1E] text-white"
            />
            <button type="submit" className="absolute top-0 h-2/3 right-2 px-3 py-1 my-2 rounded-md bg-white">
              <IoSend className="w-6 h-6 text-[#AD70F9]" />
            </button>
          </form>
        </div>

        {videoDetails.map((detail, index) => (
          <div key={index} className="mt-6 flex flex-col items-center">
            <div>
              {detail?.thumbnail?.high?.url && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">Extracted Thumbnail:</h3>
                  <div className="border rounded-md overflow-hidden">
                    <img src={detail?.thumbnail?.high?.url} alt="VideoThumbnail" className="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => handleDownloadImage(detail?.thumbnail?.high?.url)}
                      className="text-white border border-[#ff6eb2] bg-gradient-to-r from-purple-600 via-pink-400 to-yellow-300 h-10 w-40 my-5"
                    >
                      Download Image
                    </button>
                  </div>
                </div>
              )}

              <h1 className="text-2xl font-semibold text-white mb-2">{detail?.title}</h1>
            </div>

            {detail?.tags?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 text-white">Extracted Tags:</h3>
                <div className="flex flex-wrap">
                  {detail?.tags?.map((tag, index) => (
                    <div key={index} className="bg-gray-200 px-3 py-1 rounded-md m-1">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideoDetailsExtractor;
