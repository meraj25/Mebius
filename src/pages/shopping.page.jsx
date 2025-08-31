import { useState } from "react";
import { useGetAllProductsQuery, useGetAllColorsQuery } from "@/lib/api";
import SimpleProductCard from "@/components/SimpleProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Shopping() {
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // fetch colors for filter dropdown
  const { data: colors = [] } = useGetAllColorsQuery();

  // Fetch products with query parameters for color and sortOrder
  // Assuming useGetAllProductsQuery accepts an object parameter for filtering and sorting
  const { data: products = [], isLoading, isError, error } = useGetAllProductsQuery({
    color: selectedColor || undefined,
    sortPrice: sortOrder || undefined,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong"}</p>;
  }

  return (
    <div>
      <div className="flex items-end gap-6 mb-6">
        <div>
          <h2>Filter By:</h2>
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger>
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color._id} value={color._id}>
                  {color.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <h2>Sort By Price:</h2>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger>
              <SelectValue placeholder="Select order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <SimpleProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shopping;
