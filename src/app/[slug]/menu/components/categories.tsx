"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Products from "./products";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: { products: true };
      };
    };
  }>;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true };
}>;

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {

  const [selectCategory, setSelectCategory] = useState<MenuCategoryWithProducts>(restaurant.menuCategories[0]);

  const handleCategoryClick = (category: MenuCategoryWithProducts) =>
    setSelectCategory(category);

  const getCategoryButtonVariant = (category: MenuCategoryWithProducts) => {
    return category.id === selectCategory.id ? "default" : "secondary";
  };

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={45}
            height={45}
          />
          <div>
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
            <p className="text-xs opacity-55">{restaurant.description}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
          <ClockIcon size={12} />
          <p>Aberto!</p>
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {restaurant.menuCategories.map((category) => (
            <Button
              onClick={() => handleCategoryClick(category)}
              key={category.id}
              variant={getCategoryButtonVariant(category)}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))} 
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h3 className="px-5 pt-8 font-semibold">{selectCategory.name}</h3>

      <Products products={selectCategory.products} />
    </div>
  );
};

export default RestaurantCategories;

//commit aqui eu fiz um map para pegar todas as categorias do restaurante e criar um botão para cada uma delas, e quando eu clicar em um botão ele vai setar a categoria selecionada
// primeiro eu pegos as categorias de lanches do restaurant no map, no useState eu seto a primeira categoria como a categoria selecionada
// depois eu crio um botão para cada categoria, e quando eu clicar em um botão ele vai setar a categoria selecionada
// e por fim eu renderizo os produtos da categoria selecionada