import { useGetAllOrdersQuery } from "@/lib/api";
import { useUser } from "@clerk/clerk-react";
import OrderHistory from "@/components/Order";

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
   <OrderHistory orders={orders} />
  );
}

export default MyOrdersPage;
