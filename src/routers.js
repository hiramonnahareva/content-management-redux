import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import ReadHistory from "./Pages/ReadHistory";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/readHistory",
        element: <ReadHistory />,
      },
    
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "top-rated",
//         element: <TopRated />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <ProductList />,
//       },
//       {
//         path: "add-product",
//         element: <AddProduct />,
//       },
    ],
  },
]);

export default routes;