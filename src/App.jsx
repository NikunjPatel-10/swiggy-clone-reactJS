import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/restaurant/:resId",
      element: <RestaurantDetails />,
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
