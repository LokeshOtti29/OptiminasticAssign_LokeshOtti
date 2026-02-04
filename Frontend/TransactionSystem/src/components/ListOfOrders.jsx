import React from "react";

const ListOfOrders = () => {
  const orders = [
    {
      id: "ORD001",
      amount: 500,
      status: "FULFILLED",
      fulfillmentId: "101",
    },
    {
      id: "ORD002",
      amount: 300,
      status: "PENDING",
      fulfillmentId: "-",
    },
  ];

  return (
    <div className="container mt-5">
      <h4 className="mb-3">My Orders</h4>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Fulfillment ID</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>₹ {order.amount}</td>
              <td>
                <span
                  className={`badge ${
                    order.status === "FULFILLED"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td>{order.fulfillmentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfOrders;
