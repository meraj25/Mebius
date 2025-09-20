import { useGetAllOrdersQuery } from "@/lib/api";
import { useUser } from "@clerk/clerk-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function MyOrdersPage() {
  const { user } = useUser();
  const userId = user?.id;

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useGetAllOrdersQuery({ userId });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message || "Something went wrong"}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <div className="text-center text-gray-500">No orders found.</div>
      ) : (
        orders.map((order) => (
          <Card key={order._id}>
            <CardHeader>
              <CardTitle>Order #{order._id}</CardTitle>
              <CardDescription>Status: {order.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <strong>Items:</strong>
                <ul className="list-disc ml-6 mt-2">
  {order.items?.map((item, idx) => (
    <li key={idx}>
      {item.product?.name || item.name} &times; {item.quantity}{" "}
      <span className="text-gray-500">
        (${item.price?.toFixed(2) || "N/A"})
      </span>
    </li>
  )) || <li>No items available</li>}
</ul>
              </div>
              <div className="mt-4 font-semibold">
                Total Price: $
                {order.items
                  .reduce(
                    (sum, item) =>
                      sum + (item.price ? item.price * item.quantity : 0),
                    0
                  )
                  .toFixed(2)}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

export default MyOrdersPage;