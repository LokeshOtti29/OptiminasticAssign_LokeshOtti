import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import ListOfOrders from "./ListOfOrders";
import TotalWallet from "./TotalWallet";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TotalWallet />
      <ListOfOrders />
    </div>
  );
};

export default Home;
