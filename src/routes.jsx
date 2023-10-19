import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";
import ItemsLayout from "./pages/Items/Layout";
import ShowItem from "./pages/Items/ShowItem";
import UpdateItem from "./pages/Items/UpdateItem";
import CreateItem from "./pages/Items/CreateItem";
import ListItems from "./pages/Items/ListItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <ListItems />,
          },
          {
            path: ":id",
            element: <ShowItem />,
          },
          {
            path: ":id/update",
            element: <UpdateItem />,
          },
          {
            path: "new",
            element: <CreateItem />,
          },
        ],
      },
    ],
  },
]);

export default router;
