import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Order from "./components/Order";
import Wallet from "./components/Wallet";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Wallet />
    </>
  );
}

export default App;
