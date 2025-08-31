import { useState } from "react";
import SimpleProductCard from "@/components/SimpleProductCard";
import { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetAllColorsQuery } from "@/lib/api";
import { useParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ShopPage() {
  const { category: categorySlug } = useParams();

  const { data: categories = [] } = useGetAllCategoriesQuery();
  const { data: colors = [] } = useGetAllColorsQuery();

  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const selectedCategory = categories.find((c) => c.slug === categorySlug);
  const categoryId = selectedCategory?._id;

  // Pass categoryId, color, and sortOrder to the query
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery({
    categoryId: categoryId || undefined,
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
    <main>
      <h1 className="text-2xl font-bold text-center mt-8 mb-4">{selectedCategory?.name || categorySlug}</h1>
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
        {products.length > 0 ? (
          products.map((product) => (
            <SimpleProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </main>
  );
}

export default ShopPage;