import { useState } from "react";

const YoutubeThumbnailExtractor = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnails, setThumbnails] = useState({});

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleExtractThumbnail = async () => {
    const res = await fetch("http://localhost:5000/videoLinkForYoutubeThumbnail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ videoUrl }),
    });
    const data = await res.json();

    setThumbnails(data);
  };

  console.log(thumbnails?.high?.url);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Youtube Thumbnail Extractor</h1>

        <div className="mb-4">
          <form>
            <input
              type="text"
              value={videoUrl}
              onChange={handleInputChange}
              placeholder="Enter YouTube URL"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </form>
        </div>

        <button
          onClick={handleExtractThumbnail}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Extract Thumbnail
        </button>

        {thumbnails?.high?.url && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Extracted Thumbnail:</h3>
            <ul>
              <img src={thumbnails?.high?.url} alt="Thumbnails" />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeThumbnailExtractor;
