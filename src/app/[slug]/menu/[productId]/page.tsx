import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductHeader from "./components/productHeader";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>; //mesmo nome que está na pasta pages
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <>
     <ProductHeader product={product} />

      <h1>Product page</h1>
      <p>{slug}</p>
      <p>{productId}</p>
    </>
  );
};

export default ProductPage;
