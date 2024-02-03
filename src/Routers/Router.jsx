import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import YoutubeTagsExtractor from "../Pages/HomePage/ToolsSectionPages/YoutubeTagsExtractor.JSX";
import YoutubeThumbnailExtractor from "../Pages/HomePage/ToolsSectionPages/YoutubeThumbnailExtractor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/tools/youtube-tags-extractor",
        element: <YoutubeTagsExtractor></YoutubeTagsExtractor>,
      },
      {
        path: "/tools/youtube-thumbnail-extractor",
        element: <YoutubeThumbnailExtractor></YoutubeThumbnailExtractor>,
      },
    ],
  },
]);

export default router;
