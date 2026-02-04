import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import ListOfOrders from "./ListOfOrders";
import TotalWallet from "./TotalWallet";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      <TotalWallet />
      <ListOfOrders />
    </div>
  );
};

export default Home;
