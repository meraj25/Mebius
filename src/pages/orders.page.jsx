import { useGetAllOrdersQuery } from "@/lib/api";

const OrdersPage = () => {
  const {
      data: orders = [],
      isLoading,
      isError,
      error,
    } = useGetAllOrdersQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">All Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <div className="p-4 border-b">
              <div>
                <strong>User:</strong> {order.userId}
              </div>
              <div>
                <strong>Order ID:</strong> {order._id}
              </div>
              <div>
                <strong>Order Items:</strong> {order.items.length}
              </div>
              <div>
                <strong>Order Status:</strong> {order.status}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default OrdersPage;
