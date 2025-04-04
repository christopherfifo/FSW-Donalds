"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import CartSheet from "./cartSheet";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">; //pick pega apenas os campos que eu quero, ele vai pegar apenas esse campos da props
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const HandleBackClick = () => router.back();

  const handleOrderClick = () => router.push(`/${slug}/orders`);

  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={HandleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant?.coverImageUrl}
        alt={restaurant?.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrderClick}
      >
        <ScrollTextIcon />
      </Button>
      <CartSheet />
    </div>
  );
};

export default RestaurantHeader;

//commit fiz esse component para ser o header do restaurante, pois como ele vai receber um hook ele vai ser um client component
