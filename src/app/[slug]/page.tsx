import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { cleanupOrders } from "@/data/cleanup_orders";

import ConsumptionMethodOption from "./components/consumption-method-option";
import InactivityRedirect from "./components/inactivityRedirect";

interface RestaurantPageProps {
  params: { slug: string };
}


const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug); //busca o restaurante pelo slug

  if (!restaurant) {
    return notFound(); //retorna um erro 404
  }

  await cleanupOrders(slug);

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <InactivityRedirect />
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* SEJA BEM-VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar a sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          imageUrl="/dine_in.png"
          imageAlt="para comer aqui"
          buttonText="Para comer aqui"
          option="DINE_IN"
          slug={slug}
        />
        <ConsumptionMethodOption
          imageUrl="/takeaway.png"
          imageAlt="para levar"
          buttonText="Para levar"
          option="TAKEAWAY"
          slug={slug}
        />
      </div>
    </div>
  );
};

export default RestaurantPage;

// como o arquivo esta entre colchetes, ele é uma rota dinamica, ou seja, ele é uma rota que pode receber parametros dinamicos na url
// o parametro é passado como um objeto, e o nome do parametro é o nome do arquivo
