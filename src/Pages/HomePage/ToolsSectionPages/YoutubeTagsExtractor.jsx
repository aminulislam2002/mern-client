import { useState } from "react";

const YoutubeTagsExtractor = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const handleExtractTags = async () => {
    const res = await fetch("http://localhost:5000/videoLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ youtubeUrl }),
    });
    const data = await res.json();
    setTags(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">YouTube Tags Extractor</h1>

        <div className="mb-4">
          <form>
            <input
              type="text"
              value={youtubeUrl}
              onChange={handleInputChange}
              placeholder="Enter YouTube URL"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </form>
        </div>

        <button
          onClick={handleExtractTags}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Extract Tags
        </button>

        {tags.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Extracted Tags:</h3>
            <ul>
              {tags.map((tag, index) => (
                <li key={index} className="text-gray-700">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeTagsExtractor;
