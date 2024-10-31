import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  product: {
    primaryImage: string;
    secondaryImage?: string;
    name: string;
    content: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-between items-center gap-5 w-[300px] bg-grey-0 p-1 rounded-lg hover:cursor-pointer"
      onClick={() => navigate(`/product/${product.name}`)}
    >
      <div className="flex flex-col gap-5">
        <img
          src={
            isHovering && product.secondaryImage
              ? product.secondaryImage
              : product.primaryImage
          }
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
        <h1 className="text-center font-roboto-l">{product.name}</h1>
      </div>
      <h1 className="font-roboto-b">{product.price} p.</h1>
    </div>
  );
};

export default Product;
