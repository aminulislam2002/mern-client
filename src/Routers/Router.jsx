import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import YoutubeTagsExtractor from "../Pages/HomePage/ToolsSectionPages/YoutubeTagsExtractor.JSX";

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
    ],
  },
]);

export default router;
