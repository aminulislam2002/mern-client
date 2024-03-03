import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import YouTubeVideoDetailsExtractor from "../Pages/HomePage/ToolsSectionPages/YouTubeVideoDetailsExtractor";

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
        path: "/tools/youtube-video-details-extractor",
        element: <YouTubeVideoDetailsExtractor></YouTubeVideoDetailsExtractor>,
      },
    ],
  },
]);

export default router;
