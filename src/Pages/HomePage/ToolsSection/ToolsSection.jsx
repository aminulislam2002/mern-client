import { Link } from "react-router-dom"; // Make sure to import Link from 'react-router-dom' if you're using React Router

const ToolsSection = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Tools</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolsData.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h1 className="text-2xl font-bold mb-4 text-blue-600">{tool.title}</h1>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <Link
              to={`/tools/${tool.slug}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Open Tool
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const toolsData = [
  {
    title: "Sms Bomber",
    description:
      "A prank message or SMS bomber tool, which sends a huge amount of messages in bulk. It is a tool to prank your relatives and friends.",
    slug: "sms-bomber",
  },
  {
    title: "Age Calculator",
    description:
      "Age calculator calculates your age by using your date of birth, and shows it in different time units. Check your age now.",
    slug: "age-calculator",
  },
  {
    title: "Instagram Auto Liker",
    description:
      "This web application can help you increase your Instagram likes and followers. You can exchange likes & followers manually using this app.",
    slug: "instagram-auto-liker",
  },
  {
    title: "Free Youtube Subscribers",
    description:
      "This web application can help you increase your Youtube likes and subscribers. You can exchange likes & followers manually using this app.",
    slug: "free-youtube-subscribers",
  },
  {
    title: "Youtube Thumbnail Extractor",
    description:
      "Extract Youtube Thumbnail from any video of youtube at any time. High-quality youtube thumbnail extractor.",
    slug: "youtube-thumbnail-extractor",
  },
  {
    title: "Youtube Tags Extractor",
    description: "Extract youtube video tags online at high quality. Youtube video tags extractor.",
    slug: "youtube-tags-extractor",
  },
];

export default ToolsSection;
