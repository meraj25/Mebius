function OrderHistory({ orders }) {

  return (
    <div>
      <h2 className="text-xl font-semibold text-center">Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="mb-6 border-b pb-4">
            <div>
              <strong>Order ID:</strong> {order._id} <br />
              <strong>Order Status:</strong> {order.status}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;