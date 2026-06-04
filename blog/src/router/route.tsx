import BlogsPage from "@/blogs/blogs";
import HomePage from "@/home/home";
import ProjectsPage from "@/projects/projects";
import ToolsPage from "@/tools/tools";
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/tools",
    element: <ToolsPage />,
  },
];

export default routes;
