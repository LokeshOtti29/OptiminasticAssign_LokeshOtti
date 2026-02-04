import React, { useState } from "react";

const Wallet = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Amount to add:", amount);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h4 className="text-center mb-3">Add Wallet Balance</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="1"
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Add Amount
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
