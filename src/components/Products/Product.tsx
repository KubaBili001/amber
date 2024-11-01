import { Modal } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex flex-col justify-between items-center gap-5 w-[300px] bg-grey-0 p-2 rounded-lg hover:cursor-pointer"
        onClick={handleOpen}
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
            className="rounded-lg"
          />
          <h1 className="text-center font-roboto-l">{product.name}</h1>
        </div>
        <h1 className="font-roboto-b">{product.price} p.</h1>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="relative overflow-y-auto max-h-[80vh] flex sm:flex-row xs:flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:w-[300px] s:w-[500px] sm:w-[700px] md:w-[800px] lg:w-[900px] xl:w-[1000px] bg-grey-0 shadow-lg xs:p-4 sm:p-8 rounded-lg">
          <img src={product.primaryImage} className="sm:w-2/5 rounded-lg" />
          <div className="flex flex-col sm:w-3/5 gap-5">
            <h1 className="text-[30px] font-roboto">{product.name}</h1>
            <h1 className="text-[20px] font-roboto-b">{product.price} p.</h1>
            <p className="text-[15px] font-roboto-l">{product.content}</p>
          </div>
          <button
            className="w-8 h-8 bg-white rounded-full flex justify-center items-center xs:top-4 xs:right-4 sm:top-2 sm:right-2 absolute"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Product;
