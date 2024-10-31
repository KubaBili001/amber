import React from "react";
import Product from "./Product";

interface ProductsListProps {
  data: {
    primaryImage: string;
    secondaryImage?: string;
    name: string;
    content: string;
    price: number;
  }[];
}

const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
  return (
    <div className="flex justify-center mt-10 grid-cols-4">
      <div className="inline-grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-rows-min gap-4">
        {data.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
