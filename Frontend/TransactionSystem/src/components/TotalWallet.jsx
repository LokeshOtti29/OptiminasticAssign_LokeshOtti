import React from "react";

const TotalWallet = () => {
  const totalAmount = 2500;

  return (
    <div className="container mt-4">
      <div className="card text-center p-4 shadow-sm">
        <h5>Total Wallet Balance</h5>
        <h2 className="text-success mt-2">₹ {totalAmount}</h2>
      </div>
    </div>
  );
};

export default TotalWallet;
