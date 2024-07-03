import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Settings from "./pages/Settings";
import Inquiries from "./pages/Inquiries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Settings />,
      },
      {
        path: "/settings",
        element: <Settings />,
        // children: [
        //   {
        //     path: "/user-roles",
        //     element: <Settings />,
        //   },
        // ]
      },
      {
        path: "/inquiries",
        element: <Inquiries />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
