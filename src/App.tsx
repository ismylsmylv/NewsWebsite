import Navbar from "./components/Navbar/index";
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
