import React from "react";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
