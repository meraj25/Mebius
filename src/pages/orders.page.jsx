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
            User: {order.userId}<br />
            Order ID: {order._id} <br />
            Order Items: {order.items.length} <br />
            Total: {order.total} <br />
            Order Status: {order.status}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
