"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

import CartSheet from "../../components/cartSheet";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");

  const handleBackClick = () =>
    router.push(
      `/${slug}/menu?backMethod=menu&consumptionMethod=${consumptionMethod}`,
    );
  const handleOrderClick = () =>
    router.push(
      `/${slug}/orders?backMethod=menu&consumptionMethod=${consumptionMethod}`,
    );

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
          onClick={handleOrderClick}
        >
          <ScrollTextIcon />
        </Button>
      </div>
      <CartSheet />
    </>
  );
};

export default ProductHeader;
