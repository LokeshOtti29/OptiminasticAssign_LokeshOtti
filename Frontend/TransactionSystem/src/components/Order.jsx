import React, { useState } from "react";

const Order = () => {
  const [amount, setAmount] = useState("");
  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order amount:", amount);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h4 className="text-center mb-3">Create Order</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Purchase Product</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Details"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Purchase Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
