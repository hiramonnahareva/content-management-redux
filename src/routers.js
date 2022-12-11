import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import AddContent from "./Pages/AddContent";
import ContentList from "./Pages/ContentList";
import Home from "./Pages/Home";
import ReadHistory from "./Pages/ReadHistory";
import Update from "./Pages/Update";
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
        element: <AddContent />,
      },
      {
        path: "/readHistory",
        element: <ReadHistory />,
      },
    
      {
        path: "/update/:id",
        element: <Update />,
      },
      {
        path: "contentList",
        element: <ContentList/>,
      },
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