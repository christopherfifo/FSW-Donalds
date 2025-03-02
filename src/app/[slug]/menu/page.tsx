import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { notFound } from "next/navigation";

interface RestaurantMenuPageProps {

    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}

const RestaurantMenuPage = async ({params, searchParams}: RestaurantMenuPageProps) => {
    
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;
    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound();
    }
    const restaurant = await getRestaurantBySlug(slug);
    return ( <h1> Mneu {slug} {consumptionMethod}</h1> );
}
 
export default RestaurantMenuPage;//todo: 48:22