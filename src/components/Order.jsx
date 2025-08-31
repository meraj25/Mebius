function OrderHistory({ orders }) {

  return (
    <div>
      <h2>Your Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="mb-6 border-b pb-4">
            <div>
              <strong>Order ID:</strong> {order._id} <br />
              <strong>Total:</strong> {order.total} <br />
              <strong>Order Status:</strong> {order.status}
            </div>
            <div className="mt-2">
              <strong>Order Items:</strong>
              <ul className="ml-4 list-disc">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.product?.name || item.name} &times; {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;