function OrderHistory({ orders }) {

  return (
    <div>
      <h2>Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id} <br />
            Order Items: {order.items.length} <br />
            Total: {order.total} <br />
            Order Status: {order.status}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;