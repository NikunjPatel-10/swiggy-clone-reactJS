import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurant/cart" element={<Cart />} />
          <Route path="/restaurant/:resId" element={<RestaurantDetails />} />
        </Routes>
        {/* <RouterProvider router={routes} /> */}
      </div>
    </CartProvider>
  );
}

export default App;
