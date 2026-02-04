import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Order from "./components/Order";
import Wallet from "./components/Wallet";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/order" element={<Order />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}

export default App;
