"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { Button } from "@/components/ui/button";

import CartSheet from "../../components/cartSheet";
import { CartContext } from "../../contexts/cart";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { toggleCart } = useContext(CartContext);
  const router = useRouter();

  const handleBackClick = () => router.back();
  const handleToggleCart = () => {
    toggleCart();
  };

  return (
    <>
      {" "}
      <div className="min-h-300 relative h-[300px] w-full">
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-4 z-50 rounded-full"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain"
        />

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full"
          onClick={handleToggleCart}
        >
          <ScrollTextIcon />
        </Button>
      </div>
      <CartSheet />
    </>
  );
};

export default ProductHeader;
