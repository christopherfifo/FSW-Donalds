import { formatCurrency } from "@/helpers/formatCurrency";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {

  const {slug} = useParams<{slug : string}>();//commit useParams é um hook que pega os parâmetros da URL, 
  //commit usamos ele pois esse compenente está dentro de um cleint component, o que torna ele um client component
  //commit e por isso não temos acesso a banco de dados, podendo receber os dados apenas por props ou pela URL

  return (
    <div className="space-y-3 px-5 py-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${slug}/menu/${product.id}`}
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {formatCurrency(product.price)}
            </p>
          </div>

          {/* DIREITA */}

          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;

//commit line-clamp-2 é uma classe do tailwind que vai cortar o texto depois de 2 linhas
