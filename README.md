  

## 🚀Visão geral

  

O FSW - Donald’s é uma aplicação web FullStack desenvolvida com o framework Next Js, tendo como base os tokens de auto atendimento da franquia de restaurante McDonald’s, esse sistema inclui funcionalidades como formas de pedidos divididas em comer no local ou levar, criação de um carrinho de compras com possibilidade incrementar ou decrementar a quantidade dos itens do carro, confirmação de pagamento e validação de acesso para o cadastramento e consultas de pedidos do cliente.

🧩 **Status:** em desenvolvimento.

🔗Conheça você mesmo:

## 📦Estrutura do projeto

- **Linguagem:** TypeScript;

- **Framework:** Next Js;

- **Frontend:** Shadcn, Zod, React-hook-form, Tailwind, React number format;

- **Backend:**  Node e Next Js;

- **Banco de Dados:** PostgreSql e Neon;

- **Outras  ferramentas:** ESLint e ORM Prisma

## 🛠️ Descrição das Ferramentas

- **ORM Prisma:** Facilita a comunicação com o banco de dados, permitindo a criação de queries de forma mais intuitiva e segura. No projeto, o Prisma é utilizado para definir os modelos de dados e realizar operações CRUD no banco de dados PostgreSQL.

- **Neon:** Serviço de banco de dados PostgreSQL na nuvem, usado para hospedar e gerenciar o banco remotamente. O Neon foi escolhido por sua facilidade de uso e integração com o Prisma.

- **ESLint:** Ferramenta para análise de código, ajudando a manter um padrão e identificar erros. Configurado para seguir as melhores práticas de desenvolvimento com TypeScript e React.

- **Zod:** Biblioteca para validação de dados e definição de schemas, garantindo a integridade das informações manipuladas. Utilizado principalmente para validar entradas de formulários e dados recebidos via API.

- **React Number Format:** Componente para formatação de entradas numéricas, como moedas, porcentagens e documentos. Usado para garantir que os valores monetários sejam exibidos corretamente no frontend.

- **React Hook Form:** Gerencia formulários de forma simples e eficiente, integrando facilmente com validações e bibliotecas externas. Utilizado em conjunto com o Zod para validar e gerenciar o estado dos formulários.

## ⚙️Instalação e execução


- **Pré-requsitos:** NodeJs, Next Js, PostgreSql e npm.

### Passos

#### Instalação das dependências


```bash

npm install

```

#### Configuração do arquivo ``.env``
  
O projeto deve conter um arquivo ``.env`` na raiz do projeto, para isso devemos rodar o comando do ORM Prisma:

```bash

npx prisma init

```

Após isso, temos que colocar uma variável chamada ``DATABASE_URL`` e atribuir a ela a chave de acesso do seu banco de dados.

```bash

DATABASE_URL="postgresql://<usuario>:<senha>@<host>:<porta>/<banco>?sslmode=require

"

```

#### Instalação das dependências Prisma

O Prisma, exige algumas dependências individuais, para instalarmos elas usamos:

```bash

npm add prisma @prisma/client

```

#### Criação do Prisma Client

Devemos criar uma instancia do “cliente” no prisma com base nosso arquivo ``schema.prisma`` e aplicar as mudanças do banco de dados.

```bash

npm prisma generate

npm prisma migrate dev

```

#### Criação do restaurante 

Para que posso ter uma experiencia inicial de como funciona o programa deve alimentar o banco de dados com o código genérico .

```bash

npx prisma db seed    

```

## 📊 Estrutura de Pastas

```pgsql
FSW-Donalds/
|
├─ doc/
│  └─ funcionamento.mkd
├─ prisma/
│  ├─ migrations/
│  │  ├─ 20250218203014_add_initial_tables/
│  │  │  └─ migration.sql
│  │  ├─ 20250219181605_add_cascade_deletion/
│  │  │  └─ migration.sql
│  │  ├─ 20250219193744_slug_unique/
│  │  │  └─ migration.sql
│  │  ├─ 20250228000747_correcao/
│  │  │  └─ migration.sql
│  │  ├─ 20250322035920_add_customer_to_order/
│  │  │  └─ migration.sql
│  │  ├─ 20250324010705_update_of_order_status/
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  ├─ schema.prisma
│  └─ seed.ts
├─ public/
│  ├─ dine_in.png
│  ├─ logo.png
│  └─ takeaway.png
├─ src/
|  ├─ actions/
|  │  └─ cleanup-orders.ts
│  ├─ app/
│  │  ├─ [slug]/
│  │  │  ├─ components/
│  │  │  │  └─ consumption-method-option.tsx
│  │  │  ├─ menu/
│  │  │  │  ├─ [productId]/
│  │  │  │  │  ├─ components/
│  │  │  │  │  │  ├─ productDetails.tsx
│  │  │  │  │  │  └─ productHeader.tsx
│  │  │  │  │  ├─ page.tsx
│  │  │  │  │  └─ productsPageSkeleton.tsx
│  │  │  │  ├─ actions/
│  │  │  │  │  └─ createOrder.ts
│  │  │  │  ├─ components/
│  │  │  │  │  ├─ cartProductItems.tsx
│  │  │  │  │  ├─ cartSheet.tsx
│  │  │  │  │  ├─ categories.tsx
│  │  │  │  │  ├─ finishOrderDiaLog.tsx
│  │  │  │  │  ├─ header.tsx
│  │  │  │  │  └─ products.tsx
│  │  │  │  ├─ contexts/
│  │  │  │  │  └─ cart.tsx
│  │  │  │  ├─ data/
│  │  │  │  │  └─ get-restaurant-categories.tsx
│  │  │  │  ├─ helpers/
│  │  │  │  │  └─ cpf.ts
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ RestaurantSkeleton.tsx
│  │  │  ├─ orders/
│  │  │  │  ├─ components/
│  │  │  │  │  ├─ cpfForms.tsx
│  │  │  │  │  ├─ orderItems.tsx
│  │  │  │  │  └─ orderList.tsx
│  │  │  │  ├─ orderListSkeleton.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ consumptionMethodSkeleton.tsx
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ button.tsx
│  │  │  ├─ card.tsx
│  │  │  ├─ drawer.tsx
│  │  │  ├─ form.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ label.tsx
│  │  │  ├─ scroll-area.tsx
│  │  │  ├─ separator.tsx
│  │  │  ├─ sheet.tsx
│  │  │  ├─ skeleton.tsx
│  │  │  └─ sonner.tsx
│  │  ├─ cleanupOrdersTrigger.tsx 
|  |  ├─ homePageSkeleton.tsx
│  │  └─ inactivityRedirect.tsx
│  ├─ data/
│  │  └─ get-restaurant-by-slug.ts
│  ├─ helpers/
│  │  └─ formatCurrency.ts
│  └─ lib/
│     ├─ prisma.ts
│     └─ utils.ts
├─ .env
├─ .gitignore
├─ .prettierrc.json
├─ components.json
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json
```

## ⛓️‍💥Conexão com o banco de dados
  
Conexão dentro do ``prisma.ts``.

``` typescript

// client.ts

import { PrismaClient } from '@prisma/client'

// Instância global para desenvolvimento (evitar múltiplas instâncias no hot reloading)

const globalForDb = globalThis as unknown as { db: PrismaClient }

export const db =

  process.env.NODE_ENV === 'production' 

    ? new PrismaClient()  // Em produção, cria uma única instância
  
    : globalForDb.db || new PrismaClient()  // Em desenvolvimento, reutiliza a instância global

// Apenas em desenvolvimento, armazenamos a instância global para evitar recriação

if (process.env.NODE_ENV !== 'production') {

  globalForDb.db = db

}

```


### Explicação do código `client.ts`

O código define e gerencia uma instância do **Prisma Client**, garantindo eficiência no ambiente de desenvolvimento e produção.
#### **1. Importação do Prisma Client**

```typescript
import { PrismaClient } from '@prisma/client'
```

Aqui, importamos o `PrismaClient`, que é usado para interagir com o banco de dados.

#### **2. Evitar múltiplas instâncias no desenvolvimento**

```typescript
const globalForDb = globalThis as unknown as { db: PrismaClient }
```

Criamos um objeto `globalForDb`, que faz referência a `globalThis`. Isso é útil para armazenar a instância do Prisma globalmente e evitar a criação de múltiplas instâncias durante o **hot reloading** no desenvolvimento.

#### **3. Definição da instância do Prisma**

```typescript
export const db =
  process.env.NODE_ENV === 'production'
    ? new PrismaClient()  // Em produção, cria uma nova instância
    : globalForDb.db || new PrismaClient()  // Em desenvolvimento, reutiliza ou cria uma nova instância
```

- Se o ambiente for **produção**, cria uma nova instância de `PrismaClient`.
- Se for **desenvolvimento**, reutiliza a instância global (`globalForDb.db`) ou cria uma nova, caso ainda não exista.

#### **4. Armazenamento da instância no ambiente de desenvolvimento**

```typescript
if (process.env.NODE_ENV !== 'production') {
  globalForDb.db = db
}
```

- Se estiver **fora da produção**, a instância criada é armazenada em `globalForDb.db`, garantindo que não sejam criadas múltiplas instâncias no **hot reloading**.

## 📡Context Api

Arquivo ``cart.tsx``

```tsx
"use client";

  

import { Product } from "@prisma/client";

import { createContext, ReactNode, useState } from "react";

  

export interface CartProduct

  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {

  quantity: number;

}

  

export interface ICartContext {

  isOpen: boolean;

  products: CartProduct[];

  total: number;

  totalQuantity: number;

  toggleCart: () => void;

  addProduct: (product: CartProduct) => void;

  decreaseProductQuantity: (productId: string) => void;

  increaseProductQuantity: (productId: string) => void;

  removeProduct: (productId: string) => void;

}

  

export const CartContext = createContext<ICartContext>({

  isOpen: false,

  products: [],

  total: 0,

  totalQuantity: 0,

  toggleCart: () => {},

  addProduct: () => {},

  decreaseProductQuantity: () => {},

  increaseProductQuantity: () => {},

  removeProduct: () => {},

});

  

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<CartProduct[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  

  const total = products.reduce((acc, product) => {

    return acc + product.price * product.quantity;

  }, 0);

  

  const totalQuantity = products.reduce((acc, product) => {

    return acc + product.quantity;

  }, 0);

  

  const toggleCart = () => {

    setIsOpen((prev) => !prev);

  };

  

  const addProduct = (product: CartProduct) => {

    const productIsAlreadyOnTheCart = products.some(

      (prevProduct) => prevProduct.id === product.id,

    );

    if (!productIsAlreadyOnTheCart) {

      return setProducts((prev) => [...prev, product]);

    }

    setProducts((prevProduct) => {

      return prevProduct.map((prevProduct) => {

        if (prevProduct.id === product.id) {

          return {

            ...prevProduct,

            quantity: prevProduct.quantity + product.quantity,

          };

        }

        return prevProduct;

      });

    });

  };

  const decreaseProductQuantity = (productId: string) => {

    setProducts((prevProduct) => {

      return prevProduct.map((prevProduct) => {

        if (prevProduct.id !== productId) {

          return prevProduct;

        }

  

        if (prevProduct.quantity === 1) {

          return prevProduct;

        }

        return { ...prevProduct, quantity: prevProduct.quantity - 1 };

      });

    });

  };

  

  const increaseProductQuantity = (productId: string) => {

    setProducts((prevProduct) => {

      return prevProduct.map((prevProduct) => {

        if (prevProduct.id !== productId) {

          return prevProduct;

        }

        return { ...prevProduct, quantity: prevProduct.quantity + 1 };

      });

    });

  };

  

  const removeProduct = (productId: string) => {

    setProducts((prevProduct) => {

      return prevProduct.filter((prevProduct) => prevProduct.id !== productId);

    });

  };

  

  return (

    <CartContext.Provider

      value={{

        isOpen: isOpen,

        products: products,

        total: total,

        totalQuantity: totalQuantity,

        toggleCart: toggleCart,

        addProduct: addProduct,

        decreaseProductQuantity: decreaseProductQuantity,

        increaseProductQuantity: increaseProductQuantity,

        removeProduct: removeProduct,

      }}

    >

      {children}

    </CartContext.Provider>

  );

};
```

Arquivo que engloba todo o projeto para a utilização dos states por diversos componentes sem a necessidade de passar como props.

### Explicação do código `CartContext.ts`

Este código implementa um **Contexto de Carrinho de Compras** no React utilizando **React Context API** e **useState**.

#### **1. Definição e tipos do carrinho**

```typescript
export interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}
```

Aqui, criamos a interface `CartProduct`, que define um produto no carrinho com as propriedades `id`, `name`, `price`, `imageUrl` e `quantity`.

```typescript
export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  total: number;
  totalQuantity: number;
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProduct: (productId: string) => void;
}
```

Aqui definimos a interface `ICartContext`, que estrutura os dados e funções do contexto.

#### **2. Criação do Contexto**

```typescript
export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  total: 0,
  totalQuantity: 0,
  toggleCart: () => {},
  addProduct: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProduct: () => {},
});
```

Criamos um contexto `CartContext` com valores padrões.

#### **3. Implementação do `CartProvider`**

```typescript
export const CartProvider = ({ children }: { children: ReactNode }) => {
```

Definimos um provedor para gerenciar o estado do carrinho.

- `products`: Estado para armazenar os produtos no carrinho.
- `isOpen`: Estado para controlar a visibilidade do carrinho.

#### **4. Cálculo do total de itens e preço**

```typescript
const total = products.reduce((acc, product) => {
  return acc + product.price * product.quantity;
}, 0);
```

Calcula o valor total dos produtos no carrinho.

```typescript
const totalQuantity = products.reduce((acc, product) => {
  return acc + product.quantity;
}, 0);
```

Calcula a quantidade total de produtos no carrinho.

#### **5. Funções do carrinho**

- **Abrir e fechar o carrinho**

```typescript
const toggleCart = () => {
  setIsOpen((prev) => !prev);
};
```

- **Adicionar um produto**

```typescript
const addProduct = (product: CartProduct) => {
  const productIsAlreadyOnTheCart = products.some(
    (prevProduct) => prevProduct.id === product.id,
  );
  if (!productIsAlreadyOnTheCart) {
    return setProducts((prev) => [...prev, product]);
  }
  setProducts((prevProduct) => {
    return prevProduct.map((prevProduct) => {
      if (prevProduct.id === product.id) {
        return {
          ...prevProduct,
          quantity: prevProduct.quantity + product.quantity,
        };
      }
      return prevProduct;
    });
  });
};
```

- **Aumentar/diminuir a quantidade de um produto**

```typescript
const decreaseProductQuantity = (productId: string) => {
  setProducts((prevProduct) => {
    return prevProduct.map((prevProduct) => {
      if (prevProduct.id !== productId) {
        return prevProduct;
      }
      if (prevProduct.quantity === 1) {
        return prevProduct;
      }
      return { ...prevProduct, quantity: prevProduct.quantity - 1 };
    });
  });
};
```

- **Remover um produto**

```typescript
const removeProduct = (productId: string) => {
  setProducts((prevProduct) => {
    return prevProduct.filter((prevProduct) => prevProduct.id !== productId);
  });
};
```

#### Arquivo do ``layout``

```tsx

import "./globals.css";

import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppins = Poppins({

  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],

  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "FSW Donalds",

  description: "Bora finalizar esse projeto lindo!",

  icons: "/logo.png",

};

export default function RootLayout({

  children,

}: Readonly<{
 
  children: React.ReactNode; 

}>) {

  return ( 

    <html lang="pt-BR" suppressHydrationWarning>

      <body

        className={`${poppins.className} antialiased`}

        suppressHydrationWarning

      >

        <CartProvider>{children}</CartProvider>

      </body>

    </html>

  );
}

```

## 🗂️Estrutura das pastas

### ``App``

Arquivo ``page.tsx``
```tsx
"use client"

import Image from "next/image";

import Link from "next/link";

import { useEffect,useState } from "react";

  

import CleanupOrdersTrigger from "@/components/cleanupOrdersTrigger";

import HomePageSkeleton from "@/components/homePageSkeleton";

import { Button } from "@/components/ui/button";

  

const HomePage = () => {

  const [loading, setLoading] = useState(true);

  

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 5000);

  

    return () => clearTimeout(timer);

  }, []);

  

  if (loading) {

    return <HomePageSkeleton />;

  }

  

  return (

    <div className="flex h-screen flex-col items-center justify-center bg-red-600 px-6">
      <CleanupOrdersTrigger />
      <div className="flex h-screen w-full flex-col items-center justify-center">

        {/* LOGO E TITULO */}

        <div className="flex flex-col items-center gap-2">

          <Image

            src="https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy"

            alt="McDonald's"

            height={82}

            width={82}

          />

          <h1 className="font-semibold text-yellow-500">McDonald&apos;s</h1>

        </div>

        {/* SEJA BEM-VINDO */}

        <div className="space-y-2 pt-24 text-center">

          <h3 className="text-2xl font-semibold text-yellow-400">

            Seja bem-vindo ao FSW-Donald&apos;s!

          </h3>

          <p className="text-white opacity-80">

            Bem-vindo ao McDonald&apos;s, onde sabor, qualidade e tradição se

            encontram para transformar cada momento em uma experiência

            deliciosa!

          </p>

        </div>

      </div>

      <div className="flex items-center flex-col space-y-10 p-14">

        <Button variant="secondary" className="rounded-full" asChild>

          <Link href={`/fsw-donalds`}>Começar</Link>

        </Button>

        <Button className="rounded-full" asChild>

          <Link href={`/fsw-donalds/orders`}>Visualizar pedidos</Link>

        </Button>

      </div>

    </div>

  );

};
  

export default HomePage;
```

Este componente redireciona o usuário para a página do restaurante passando na ``URL`` o restaurante que esta sendo referenciado, ou seja, o ``Slug``. Além disso, ao ser inicializado chama o componente responsável por verificar a tamanho da tabela de pedidos e excluir alguns pedidos caso tenha excedido o limite. 

#### 1. Função/Componente ``InactivityRedirect``

```tsx
"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

const InactivityRedirect = () => {

  const router = useRouter();

  useEffect(() => {

    let timeout = setTimeout(() => {

      router.back();

    }, 180000); // 180 segundos sem interação

  

    const resetTimeout = () => {

      clearTimeout(timeout);

      timeout = setTimeout(() => {

        router.back();

      }, 30000);

    };



    window.addEventListener("mousemove", resetTimeout);

    window.addEventListener("keydown", resetTimeout);

    window.addEventListener("touchstart", resetTimeout);

  

    return () => {

      clearTimeout(timeout);

      window.removeEventListener("mousemove", resetTimeout);

      window.removeEventListener("keydown", resetTimeout);

      window.removeEventListener("touchstart", resetTimeout);

    };

  }, [router]);

  

  return null;

};


export default InactivityRedirect;
```

Este componente monitora a inatividade do usuário e, após 180 segundos sem interação (movimento do mouse, pressionamento de tecla ou toque na tela), redireciona-o para a página anterior. É útil para otimizar a experiência em kiosks ou sistemas de autoatendimento.

#### 2. Função ``get-restaurant-by-slug``

```ts
import { db } from "@/lib/prisma";

  

export const getRestaurantBySlug = async (slug: string) => {

    const restaurant = await db.restaurant.findUnique({

        where: {

            slug: slug

        }

    });

  

  return restaurant;

};
```

Busca um restaurante no banco de dados PostgreSQL usando o `slug` como identificador. Retorna os dados do restaurante ou `null` se não for encontrado. Utiliza o Prisma para a consulta

#### 3. Função/Componente Server ``cleanup-orders`
``
```ts
'use server'

  

import { db } from "@/lib/prisma"

  

export async function cleanupOldOrders() {

  try {

    // Conta o total de pedidos

    const orderCount = await db.order.count()

    if (orderCount >= 10) {

      // Encontra os IDs dos 5 pedidos mais antigos

      const oldestOrders = await db.order.findMany({

        take: 5,

        orderBy: { createdAt: 'asc' },

        select: { id: true }

      })

  

      // Exclui todos os pedidos exceto os 5 mais antigos

      await db.order.deleteMany({

        where: {

          NOT: { id: { in: oldestOrders.map(o => o.id) } }

        }

      })

  

      console.log('Limpeza de pedidos concluída - mantidos 5 mais recentes')

    }

  } catch (error) {

    console.error('Erro na limpeza de pedidos:', error)

    throw error

  }

}
```

Esta função é responsável por limpar pedidos recentes do banco de dados quando o número de pedidos iguala ou excede um limite (10 pedidos). Ela remove os 5 pedidos mais novos para manter o banco de dados otimizado. A função é acionada automaticamente e registra logs para depuração. Caso ocorra um erro, retorna uma mensagem de sucesso ou falha.

#### 4. Função ``formatCurrency``

```ts
export const formatCurrency = (value: number) => {

  return new Intl.NumberFormat("pt-BR", {

    style: "currency",

    currency: "BRL",

  }).format(value);

};
```

Formata um valor numérico como moeda brasileira (BRL), incluindo o símbolo "R" e separadores de milhar e decimal. Por exemplo, o valor 1000 é formatado como ``R 1.000,00``.

Arquivo ``page.tsx``
```tsx
import Image from "next/image";

import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug"; 

import ConsumptionMethodOption from "./components/consumption-method-option";

import InactivityRedirect from "../../components/inactivityRedirect"; 

interface RestaurantPageProps {

  params:  Promise<{ slug: string }>;

}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {

  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug); //busca o restaurante pelo slug

  if (!restaurant) {

    return notFound(); //retorna um erro 404

  }

  
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
```

Este arquivo é responsável por exibir a página de um restaurante com base no `slug` da URL.

- Importa dependências, incluindo componentes e a função `getRestaurantBySlug`.
- Obtém o `slug` dos parâmetros da URL.
- Busca os dados do restaurante correspondente.
- Exibe um erro `404` se o restaurante não for encontrado.
- Renderiza a interface, incluindo o nome, imagem e opções de consumo (`Para comer aqui` ou `Para levar`).

#### 5. Componente  ``ConsumptionMethodOption`` 

```tsx
import { ConsumptionMethod } from "@prisma/client"; //importa o tipo ConsumptionMethod do prisma comer aqui ou levar

import Image from "next/image";

import Link from "next/link";

  

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

  

interface ConsumptionMethodOptionProps {

  imageUrl: string;

  imageAlt: string;

  buttonText: string;

  option: ConsumptionMethod;

  slug: string;

}

  

const ConsumptionMethodOption = ({

  imageUrl,

  imageAlt,

  buttonText,

  option,

  slug,

}: ConsumptionMethodOptionProps) => {

  return (

    <Card>

      <CardContent className="flex flex-col items-center gap-8 py-8">

        <div className="relative h-[80px] w-[80px]">

          <Image

            src={imageUrl}

            alt={imageAlt}

            fill

            className="object-contain"

          />

        </div>

        <Button variant="secondary" className="rounded-full" asChild>

          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>{buttonText}</Link>

        </Button>

      </CardContent>

    </Card>

  );

};

  

export default ConsumptionMethodOption;

```

Componente que representa uma opção de consumo do restaurante.

- Recebe propriedades como imagem, texto do botão e tipo de consumo (`DINE_IN` ou `TAKEAWAY`).
- Renderiza um `Card` com a imagem e um botão de escolha.
- O botão redireciona para o menu do restaurante com o método de consumo escolhido.

#### 6. Componente  ``cleanupOrdersTrigger`` 

```tsx
'use client'

  

import { useEffect } from 'react'



import { cleanupOldOrders } from '@/actions/cleanup-orders'

  

export default function CleanupOrdersTrigger() {

  useEffect(() => {

    const checkAndClean = async () => {

      try {

        await cleanupOldOrders()

      } catch (error) {

        console.error('Falha ao limpar pedidos:', error)

      }

    }

  

    // Verifica a cada 1 minuto (ajuste conforme necessário)

    const interval = setInterval(checkAndClean, 60000)

    // Verifica imediatamente ao carregar

    checkAndClean()

  

    return () => clearInterval(interval)

  }, [])

  

  return null // Componente invisível

}
```

Componente invisível que gerencia automaticamente a limpeza de pedidos antigos no banco de dados. Ele:

1. **Dispara imediatamente** a verificação ao carregar a página.
2. **Repete a cada 1 minuto** enquanto a aplicação estiver ativa.
3. **Chama a Server Action** `cleanupOldOrders` para remover pedidos excedentes (mantendo apenas os 5 mais recentes quando há 10+ registros).
4. **Limpa recursos** automaticamente quando a página é fechada.

**Funcionamento Interno**:

- Usa `useEffect` para controle do ciclo de vida.
- Registra erros no console sem interromper a aplicação.
- Não renderiza elementos visíveis (`return null`).

**Integração**:

- Deve ser colocado na página principal (`app/page.tsx`).
- Trabalha em conjunto com a Server Action `cleanupOldOrders`.

### Orders

Arquivo `page.tsx`

```tsx
import { db } from "@/lib/prisma";
import { isValideCPF, removeCpfPunctuation } from "../menu/helpers/cpf";
import CpfForm from "./components/cpfForms";
import OrderList from "./components/orderList";

interface OrdersPageProps {
  searchParams: Promise<{ cpf: string }>;
}

const OrdersPage = async ({ searchParams }: OrdersPageProps) => {
  const { cpf } = await searchParams;

  if (!cpf) {
    return <CpfForm />;
  }

  if (!isValideCPF(cpf)) {
    return <CpfForm />;
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      customerCpf: removeCpfPunctuation(cpf),
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
        },
      },
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return <OrderList orders={orders} />;
};

export default OrdersPage;
```

**Explicação:**

- Importa funções e componentes auxiliares.
- Define uma interface para os parâmetros recebidos.
- Extrai o `cpf` dos parâmetros de busca.
- Se o CPF não existir ou for inválido, exibe o formulário.
- Consulta os pedidos no banco usando o CPF sem pontuação.
- Inclui dados do restaurante e produtos.
- Renderiza a lista de pedidos.


#### 1. Componente `orderList`

```tsx
"use client";

import { OrderStatus, Prisma } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/formatCurrency";

import OrderItems from "./orderItems";

interface OrderLitsProps {
  orders: Array<
    Prisma.OrderGetPayload<{
      include: {
        restaurant: {
          select: {
            name: true;
            avatarImageUrl: true;
          };
        };
        orderProducts: {
          include: {
            product: true;
          };
        };
      };
    }>
  >;
}

const getStatusLabel = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.FINISHED:
      return "Finalizado";
    case OrderStatus.PENDING:
      return "Pendente";
    case OrderStatus.IN_PREPARATION:
      return "Em preparação";
    case OrderStatus.CANCELED:
      return "Cancelado";
    default:
      return "";
  }
};

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.FINISHED:
      return "bg-green-400";
    case OrderStatus.PENDING:
      return "bg-gray-300";
    case OrderStatus.IN_PREPARATION:
      return "bg-yellow-500";
    case OrderStatus.CANCELED:
      return "bg-red-500";
    default:
      return "";
  }
};

const OrderList = ({ orders }: OrderLitsProps) => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");

  const handleBack = () => {
    router.push(`/${slug}/menu?consumptionMethod=${consumptionMethod}`);
  };

  return (
    <div className="space-y-6 p-6">
      <Button size="icon" variant="secondary" className="rounded-full" onClick={handleBack}>
        <ChevronLeftIcon />
      </Button>

      <div className="flex items-center gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus Pedidos</h2>
      </div>

      {orders.map((order) => (
        <Card key={order.id} className="p-4">
          <CardContent className="space-y-4 p-5">
            <div className={`w-fit rounded-full px-2 py-1 text-xs font-semibold text-white ${getStatusColor(order.status)}`}>
              {getStatusLabel(order.status)}
            </div>

            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image fill src={order.restaurant.avatarImageUrl} alt={order.restaurant.name} className="rounded-sm" />
              </div>
              <p className="text-sm font-semibold">{order.restaurant.name}</p>
            </div>

            <Separator />
            <OrderItems order={order} />
            <Separator />

            <p className="text-sm font-medium">{formatCurrency(order.total)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
```

**Explicação:**

- Renderiza a lista de pedidos com status, restaurante e produtos.
- Usa cores e rótulos diferentes para cada status.
- Exibe a imagem e nome do restaurante.
- Chama `OrderItems` para mostrar produtos do pedido.
- Mostra o total formatado com `formatCurrency`.

#### 2. Componente `orderItems`

```tsx
import { Prisma } from "@prisma/client";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderItems = ({ order }: OrderItemProps) => {
  return (
    <div className="space-y-2">
      {order.orderProducts.map((orderProduct) => (
        <div key={orderProduct.id} className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">
            {orderProduct.quantity}
          </div>
          <p className="text-sm">{orderProduct.product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderItems;
```

**Explicação:**

- Lista os produtos de um pedido.
- Mostra a quantidade de cada item e o nome do produto.

#### 3. Componente `cpfForms`

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { isValideCPF, removeCpfPunctuation } from "../../menu/helpers/cpf";

const formSchema = z.object({
  cpf: z
    .string()
    .trim()
    .min(1, { message: "CPF é obrigatório" })
    .refine((value) => isValideCPF(value), { message: "CPF inválido" }),
});

type FormSchema = z.infer<typeof formSchema>;

const CpfForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
    },
  });

  const pathname = usePathname();
  const router = useRouter();

  const onSubmit = (data: FormSchema) => {
    router.push(`${pathname}?cpf=${removeCpfPunctuation(data.cpf)}`);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Visualizar pedidos</DrawerTitle>
          <DrawerDescription>
            Insira o seu CPF abaixo para visualizar os seus pedidos
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="px-4">
                  <FormLabel>Seu CPF</FormLabel>
                  <FormControl>
                    <PatternFormat
                      placeholder="Digite o seu CPF..."
                      format="###.###.###-##"
                      customInput={Input}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DrawerFooter>
              <Button type="submit" variant="destructive" className="w-full rounded-full">
                confirmar
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full rounded-full" onClick={handleCancel}>
                  Cancelar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};

export default CpfForm;
```

**Explicação:**

- Formulário para inserir CPF.
- Valida o CPF com Zod.
- Usa `PatternFormat` para formatar o input.
- Redireciona para a página com CPF como query param ao confirmar.
- Cancela com `router.back()`.

### Menu

Arquivo ``page.tsx``
```tsx
import { notFound } from "next/navigation";

  

import RestaurantCategories from "./components/categories";

import RestaurantHeader from "./components/header";

import { getRestaurantCategories } from "./data/get-restaurant-categories";

  

interface RestaurantMenuPageProps {

  params: Promise<{ slug: string }>;

  searchParams: Promise<{ consumptionMethod: string }>;

}

  

const isConsumptionMethodValid = (consumptionMethod: string) => {

  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());

};

  

const RestaurantMenuPage = async ({

  params,

  searchParams,

}: RestaurantMenuPageProps) => {

  const { slug } = await params;

  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethodValid(consumptionMethod)) {

    return notFound();

  }

  const restaurant = await getRestaurantCategories(slug);

  

  if (!restaurant) {

    return notFound();

  }

  

  return (

    <div>

      <RestaurantHeader restaurant={restaurant} />

      <RestaurantCategories restaurant={restaurant} />

    </div>

  );

};

  

export default RestaurantMenuPage;
```

Página principal do menu do restaurante que:

1. Valida o parâmetro `consumptionMethod` (deve ser 'DINE_IN' ou 'TAKEAWAY')
2. Busca os dados do restaurante e suas categorias
3. Renderiza:
    
    - Cabeçalho com informações do restaurante (`RestaurantHeader`)
    - Categorias de produtos como abas navegáveis (`RestaurantCategories`)
    - Lista de produtos da categoria selecionada (`Products`)

Fluxo importante:

- Se o método de consumo for inválido → retorna 404
- Se o restaurante não for encontrado → retorna 404
- Mantém o parâmetro `consumptionMethod` em toda a navegação

Esta página serve como o hub principal para a experiência de pedidos do usuário, integrando todos os componentes necessários para a seleção de produtos.

#### 1. Função ``createOrder``

```tsx
"use server";

  

import { ConsumptionMethod } from "@prisma/client";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

  

import { db } from "@/lib/prisma";

  

import { removeCpfPunctuation } from "../helpers/cpf";

  

interface CreateOrderInput {

  customerName: string;

  customerCpf: string;

  products: Array<{

    id: string;

    quantity: number;

  }>;

  consumptionMethod: ConsumptionMethod;

  slug: string;

}

  

export const createOrder = async (input: CreateOrderInput) => {

  if (!input.consumptionMethod) {

    throw new Error("Método de consumo é obrigatório");

  }

  

  const restaurant = await db.restaurant.findUnique({

    where: {

      slug: input.slug,

    },

  });

  

  if (!restaurant) {

    throw new Error("Restaurant not found");

  }

  

  const productsWithPrices = await db.product.findMany({

    where: {

      id: {

        in: input.products.map((product) => product.id),

      },

    },

  });

  

  const productsWithPricesAndQuantities = input.products.map((product) => ({

    productId: product.id,

    quantity: product.quantity,

    price: productsWithPrices.find((p) => p.id === product.id)!.price,

  }));

  

  await db.order.create({

    data: {

      status: "PENDING",

      customerName: input.customerName,

      customerCpf: removeCpfPunctuation(input.customerCpf),

      orderProducts: {

        createMany: {

          data: productsWithPricesAndQuantities,

        },

      },

      total: productsWithPricesAndQuantities.reduce(

        (acc, product) => acc + product.price * product.quantity,

        0,

      ),

      consumptionMethod: input.consumptionMethod,

      restaurantId: restaurant.id,

    },

  });

  

  revalidatePath(`/${input.slug}/orders`);

  

  redirect(

    `/${input.slug}/orders?cpf=${removeCpfPunctuation(input.customerCpf)}&consumptionMethod=${input.consumptionMethod}`,

  );

};
```

Cria um novo pedido no banco de dados, associando-o a um restaurante, cliente (nome e CPF) e produtos selecionados. Calcula o total do pedido com base nos preços dos produtos e suas quantidades. Após a criação, redireciona o usuário para a página de pedidos com o CPF como parâmetro de busca.

#### 2. Função ``cpf``

```tsx
export const removeCpfPunctuation = (cpf: string) => {

  return cpf.replace(/[\.\-]/g, "");

};

  

export const isValideCPF = (cpf: string): boolean => {

  cpf = cpf.replace(/\D/g, "");

  

  if (cpf.length !== 11) return false;

  

  // Elimina CPFs com todos os dígitos iguais

  if (/^(\d)\1+$/.test(cpf)) return false;

  

  // Calcula o primeiro dígito verificador

  let sum = 0;

  for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);

  

  let firstVerifier = (sum * 10) % 11;

  firstVerifier = firstVerifier === 10 ? 0 : firstVerifier;

  

  if (firstVerifier !== parseInt(cpf.charAt(9))) return false;

  

  // Calcula o segundo dígito verificador

  sum = 0;

  for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);

  

  let secondVerifier = (sum * 10) % 11;

  secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;

  

  return secondVerifier === parseInt(cpf.charAt(10));

};
```

- `removeCpfPunctuation`: Remove pontuações (`.` e `-`) de um CPF, deixando apenas os dígitos.
- `isValideCPF`: Valida um CPF verificando seu formato, dígitos repetidos e dígitos verificadores. Retorna `true` se válido e `false` caso contrário.

#### 3. Componente ``get-restaurant-categories``

```tsx
import { db } from "@/lib/prisma";

  

export const getRestaurantCategories = async (slug: string) => {

  const restaurant = await db.restaurant.findUnique({

    where: {

      slug: slug,

    },

    include: {

      menuCategories: {

        include: {

          products: true,

        },

      },

    },

  });

  

  return restaurant;

};
```

Consulta o banco de dados para obter:

- Todas as informações de um restaurante específico (identificado pelo slug)
- Suas categorias de menu
- Todos os produtos associados a cada categoria

Retorna um objeto completo do restaurante com sua estrutura de menu pronta para ser renderizada. Caso o restaurante não seja encontrado, retorna null.

Esta função é essencial para a construção da página de menu do restaurante, fornecendo todos os dados necessários em uma única consulta otimizada.

#### 4. Componente ``header``

```tsx
"use client";

  

import { Restaurant } from "@prisma/client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";

import Image from "next/image";

import { useParams, useRouter } from "next/navigation";

  

import { Button } from "@/components/ui/button";

  

import CartSheet from "./cartSheet";

  

interface RestaurantHeaderProps {

  restaurant: Pick<Restaurant, "coverImageUrl" | "name">; 

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
```

Exibe o cabeçalho da página do restaurante, incluindo a imagem de capa, nome do restaurante e botões de navegação (voltar e visualizar pedidos). Também renderiza o componente `CartSheet` para exibir o carrinho de compras.

#### 5. Componente ``products``

```tsx
import { Product } from "@prisma/client";

import Image from "next/image";

import Link from "next/link";

import { useParams, useSearchParams } from "next/navigation";

  

import { formatCurrency } from "@/helpers/formatCurrency";

  

interface ProductsProps {

  products: Product[];

}

  

const Products = ({ products }: ProductsProps) => {

  const { slug } = useParams<{ slug: string }>(); 

  

  const searchParams = useSearchParams();

  

  const ConsumptionMethod = searchParams.get("consumptionMethod");

  

  return (

    <div className="space-y-3 px-5 py-3">

      {products.map((product) => (

        <Link

          key={product.id}

          href={`/${slug}/menu/${product.id}?consumptionMethod=${ConsumptionMethod}`}

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

```

Lista os produtos de uma categoria específica do menu, exibindo nome, descrição, preço e imagem. Cada produto é um link que redireciona para sua página de detalhes.

#### 6. Componente ``Categories``

```tsx
"use client";

  

import { Prisma } from "@prisma/client";

import { ClockIcon } from "lucide-react";

import Image from "next/image";

import { useContext, useState } from "react";

  

import { Button } from "@/components/ui/button";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { formatCurrency } from "@/helpers/formatCurrency";

  

import { CartContext } from "../contexts/cart";

import CartSheet from "./cartSheet";

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

  const [selectCategory, setSelectCategory] =

    useState<MenuCategoryWithProducts>(restaurant.menuCategories[0]);

  

  const { products, total, toggleCart, totalQuantity } =

    useContext(CartContext);

  

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

      <div className="flex flex-col gap-3 pb-14">

        <h3 className="px-5 pt-8 font-semibold">{selectCategory.name}</h3>

        <Products products={selectCategory.products} />

      </div>

      {products.length > 0 && (

        <div className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-between border-t-4 border-t-yellow-400 bg-white px-5 py-3">

          <div className="">

            <p className="text-xs text-muted-foreground">Total dos pedidos</p>

            <p className="text-sm font-semibold">

              R$: {formatCurrency(total)}{" "}

              <span className="text-xs font-normal text-muted-foreground">

                / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}

              </span>

            </p>

          </div>

          <Button onClick={toggleCart}>Ver sacola</Button>

          <CartSheet />

        </div>

      )}

    </div>

  );

};

  

export default RestaurantCategories;
```

#### 7. Componente ``cartSheet``

```tsx
import { useContext, useState } from "react";

  

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";

import {

  Sheet,

  SheetContent,

  SheetHeader,

  SheetTitle,

} from "@/components/ui/sheet";

import { formatCurrency } from "@/helpers/formatCurrency";

  

import { CartContext } from "../contexts/cart";

import CartProductItem from "./cartProductItems";

import FinishOrderDiaLog from "./finishOrderDiaLog";

  

const CartSheet = () => {

  const [finishOrderDiaLogIsOpen, setFinishOrderDiaLogIsOpen] = useState(false);

  const { isOpen, toggleCart, products, total } = useContext(CartContext);

  

  return (

    <Sheet open={isOpen} onOpenChange={toggleCart}>

      <SheetContent className="w-[86%]">

        <SheetHeader>

          <SheetTitle className="text-left">Sacola</SheetTitle>

        </SheetHeader>

  

        <div className="flex h-full flex-col py-5">

          <div className="flex-auto overflow-hidden">

            <ScrollArea className="h-full">

              <div className="flex flex-col gap-3 py-5 pb-8">

                {products.map((product) => (

                  <CartProductItem key={product.id} product={product} />

                ))}

              </div>

            </ScrollArea>

          </div>

          <Card className="mb-6">

            <CardContent className="p-5">

              <div className="flex justify-between">

                <p className="text-sm text-muted-foreground">Total</p>

                <p className="text-sm font-semibold">{formatCurrency(total)}</p>

              </div>

            </CardContent>

          </Card>

  

          <Button

            className="w-full rounded-full"

            onClick={() => setFinishOrderDiaLogIsOpen(true)}

          >

            Finalizar pedido

          </Button>

          <FinishOrderDiaLog

            open={finishOrderDiaLogIsOpen}

            onOpenChange={setFinishOrderDiaLogIsOpen}

          />

        </div>

      </SheetContent>

    </Sheet>

  );

};

  

export default CartSheet;
```

Exibe um painel lateral (sheet) com os itens do carrinho de compras, incluindo a quantidade, preço unitário e total. Permite finalizar o pedido ou continuar comprando. Utiliza o `CartContext` para gerenciar o estado do carrinho.

#### 8. Componente ``cartProductItems``

```tsx
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

import Image from "next/image";

import { useContext } from "react";

  

import { Button } from "@/components/ui/button";

import { formatCurrency } from "@/helpers/formatCurrency";

  

import { CartContext, CartProduct } from "../contexts/cart";

  

interface CartItemProps {

  product: CartProduct;

}

  

const CartProductItem = ({ product }: CartItemProps) => {

  

  const {decreaseProductQuantity, increaseProductQuantity, removeProduct} = useContext(CartContext);

  

  return (

    <div className="flex items-center justify-between">

      {/* ESQUERDA */}

      <div className="flex items-center gap-3">

        <div className="relative h-20 w-20 rounded-xl bg-gray-200">

          <Image src={product.imageUrl} alt={product.name} fill />

        </div>

        <div className="space-y-1">

          <p className="max-w-[90%] truncate text-ellipsis text-xs">

            {product.name}

          </p>

          <p className="text-sm font-semibold">

            {formatCurrency(product.price)}

          </p>

          {/* QUANTIDADE */}

          <div className="flex items-center gap-1 text-center">

            <Button className="h-7 w-7 rounded-lg" variant="outline" onClick={()=>decreaseProductQuantity(product.id)}>

              <ChevronLeftIcon />

            </Button>

            <p className="w-7 text-xs">{product.quantity}</p>

            <Button className="h-7 w-7 rounded-lg" variant="destructive" onClick={()=>increaseProductQuantity(product.id)}>

              <ChevronRightIcon />

            </Button>

          </div>

        </div>

      </div>

  

      {/* DIREITA */}

      <Button className="h-7 w-7 rounded-lg" variant="outline" onClick={()=>removeProduct(product.id)}>

        <TrashIcon />

      </Button>

    </div>

  );

};

  

export default CartProductItem;
```

Renderiza um item individual do carrinho de compras, mostrando:

- Imagem em miniatura do produto
- Nome e preço unitário
- Controles para aumentar/diminuir quantidade
- Botão para remover o item completamente

Utiliza o `CartContext` para:

- `decreaseProductQuantity`: Diminui a quantidade do item
- `increaseProductQuantity`: Aumenta a quantidade do item
- `removeProduct`: Remove o item do carrinho

O design é compacto para permitir a exibição de múltiplos itens no carrinho de forma organizada.

#### 9. Componente ``finishOrderDiaLog``

```tsx
"use client";

  

import { zodResolver } from "@hookform/resolvers/zod";

import { ConsumptionMethod } from "@prisma/client";

import { Loader2Icon } from "lucide-react";

import { useParams, useSearchParams } from "next/navigation";

import { startTransition, useContext, useTransition } from "react";

import { useForm } from "react-hook-form";

import { PatternFormat } from "react-number-format";

import { toast } from "sonner";

import { z } from "zod";

  

import { Button } from "@/components/ui/button";

import {

  Drawer,

  DrawerClose,

  DrawerContent,

  DrawerDescription,

  DrawerFooter,

  DrawerHeader,

  DrawerTitle,

  DrawerTrigger,

} from "@/components/ui/drawer";

import {

  Form,

  FormControl,

  FormField,

  FormItem,

  FormLabel,

  FormMessage,

} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

  

import { createOrder } from "../actions/createOrder";

import { CartContext } from "../contexts/cart";

import { isValideCPF } from "../helpers/cpf";

  

const formSchema = z.object({

  name: z.string().trim().min(1, { message: "Nome é obrigatório" }),

  cpf: z

    .string()

    .trim()

    .min(1, { message: "CPF é obrigatório" })

    .refine((value) => isValideCPF(value), { message: "CPF inválido" }),

});

  

type FormSchema = z.infer<typeof formSchema>;

  

interface FinishOrderDiaLogProps {

  open: boolean;

  onOpenChange: (open: boolean) => void;

}

  

const FinishOrderDiaLog = ({ open, onOpenChange }: FinishOrderDiaLogProps) => {

  const { slug } = useParams<{ slug: string }>();

  const { products } = useContext(CartContext);

  

  const searchParams = useSearchParams();

  const [isPending] = useTransition();

  

  const form = useForm<FormSchema>({

    resolver: zodResolver(formSchema),

    defaultValues: {

      name: "",

      cpf: "",

    },

    shouldUnregister: true,

  });

  

  const onSubmit = async (data: FormSchema) => {

    try {

      const consumptionMethod = searchParams.get(

        "consumptionMethod",

      ) as ConsumptionMethod;

  

      startTransition(async () => {

        await createOrder({

          consumptionMethod,

          customerCpf: data.cpf,

          customerName: data.name,

          products,

          slug,

        });

  

        onOpenChange(false);

        toast.success("Pedido finalizado com sucesso");

      });

    } catch (error) {

      console.log(error);

    }

  };

  

  return (

    <Drawer open={open} onOpenChange={onOpenChange}>

      <DrawerTrigger asChild></DrawerTrigger>

      <DrawerContent>

        <DrawerHeader>

          <DrawerTitle>Finalizar Pedido</DrawerTitle>

          <DrawerDescription>

            Insira as suas informações abaixo para finalizar o seu pedido

          </DrawerDescription>

        </DrawerHeader>

        <div className="p-5">

          <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              <FormField

                control={form.control}

                name="name"

                render={({ field }) => (

                  <FormItem>

                    <FormLabel>Seu nome</FormLabel>

                    <FormControl>

                      <Input placeholder="Digite o seu nome..." {...field} />

                    </FormControl>

                    <FormMessage />

                  </FormItem>

                )}

              />

              <FormField

                control={form.control}

                name="cpf"

                render={({ field }) => (

                  <FormItem>

                    <FormLabel>Seu CPF</FormLabel>

                    <FormControl>

                      <PatternFormat

                        placeholder="Digite o seu CPF..."

                        format="###.###.###-##"

                        customInput={Input}

                        {...field}

                      />

                    </FormControl>

                    <FormMessage />

                  </FormItem>

                )}

              />

              <DrawerFooter>

                <Button

                  type="submit"

                  variant="destructive"

                  className="rounded-full"

                  disabled={isPending}

                >

                  {isPending && <Loader2Icon className="animate-spin" />}

                  Finalizar

                </Button>

                <DrawerClose asChild>

                  <Button variant="outline" className="w-full rounded-full">

                    Cancelar

                  </Button>

                </DrawerClose>

              </DrawerFooter>

            </form>

          </Form>

        </div>

      </DrawerContent>

    </Drawer>

  );

};

  

export default FinishOrderDiaLog;
```

Um modal (drawer) que coleta o nome e CPF do cliente para finalizar o pedido. Valida os dados com Zod e envia as informações para a função `createOrder`. Exibe feedback de sucesso ou erro via `toast`.

### ``[productId]``

Arquivo ``page.tsx``
```tsx
import { notFound } from "next/navigation";

  

import { db } from "@/lib/prisma";

  

import ProductDetails from "./components/productDetails";

import ProductHeader from "./components/productHeader";

  

interface ProductPageProps {

  params: Promise<{ slug: string; productId: string }>; 

}

  

const ProductPage = async ({ params }: ProductPageProps) => {

  const {slug, productId } = await params;

  

  const product = await db.product.findUnique({

    where: {

      id: productId,

    },

    include: {

      restaurant: {

        select: {

          name: true,

          avatarImageUrl: true,

          slug: true,

        },

      },

    },

  });

  

  if (!product) {

    return notFound();

  }

  

  if(product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {

    return notFound();

  }

  

  return (

    <div className="flex h-full flex-col">

      <ProductHeader product={product} />

      <ProductDetails product={product} />

    </div>

  );

};

  

export default ProductPage;
```

Exibe os detalhes de um produto específico, incluindo nome, preço, descrição e ingredientes. Valida se o produto pertence ao restaurante correto (via `slug`). Se não for encontrado, retorna um erro 404.

#### 1. Componente ``ProductHeader``

```tsx
"use client";

  

import { Product } from "@prisma/client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";

import Image from "next/image";

import { useParams, useRouter } from "next/navigation";

  

import { Button } from "@/components/ui/button";

  

import CartSheet from "../../components/cartSheet";

  

interface ProductHeaderProps {

  product: Pick<Product, "name" | "imageUrl">;

}

  

const ProductHeader = ({ product }: ProductHeaderProps) => {

  const { slug } = useParams<{ slug: string }>();

  const router = useRouter();

  

  const handleBackClick = () => router.back();

  const handleOrderClick = () => router.push(`/${slug}/orders`);

  

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
```

Exibe o cabeçalho da página de detalhes de um produto, incluindo:

- Botão para voltar à página anterior
- Imagem do produto em destaque
- Botão para acessar a página de pedidos
- Integração com o componente `CartSheet` para exibir o carrinho de compras

O componente utiliza os parâmetros da URL (slug) para navegação e mantém consistência com o design do sistema. A imagem do produto é exibida em tamanho grande para melhor visualização.

#### 2. Componente ``productDetails``

```tsx
"use client";

  

import { Prisma } from "@prisma/client";

import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import Image from "next/image";

import { useContext, useState } from "react";

  

import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";

import { formatCurrency } from "@/helpers/formatCurrency";

  

import CartSheet from "../../components/cartSheet";

import { CartContext } from "../../contexts/cart";

  

interface ProductDetailsProps {

  product: Prisma.ProductGetPayload<{

    include: {

      restaurant: {

        select: {

          name: true;

          avatarImageUrl: true;

        };

      };

    };

  }>;

}

  

const ProductDetails = ({ product }: ProductDetailsProps) => {

  const { toggleCart, addProduct } = useContext(CartContext);

  const [quantity, setQuantity] = useState<number>(1);

  

  const handleDecreaseQuantity = () => {

    setQuantity((prev) => {

      if (prev === 1) {

        return 1;

      }

      return prev - 1;

    });

  };

  

  const handleIncreaseQuantity = () => {

    setQuantity((prev) => prev + 1);

  };

  

  const handleToggleCart = () => {

    addProduct({ ...product, quantity: quantity });

    toggleCart();

  };

  

  return (

    <>

      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col overflow-hidden rounded-t-3xl p-5">

        <div className="flex-auto overflow-hidden">

          {/* RESTAURANTE */}

  

          <div className="flex items-center gap-1.5">

            <Image

              src={product.restaurant.avatarImageUrl}

              alt={product.restaurant.name}

              width={16}

              height={16}

              className="rounded-full"

            />

            <p className="text-xs text-muted-foreground">

              {product.restaurant.name}

            </p>

          </div>

  

          {/* NOME DO PRODUTO */}

          <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

  

          {/* PREÇO E QUANTIDADE */}

          <div className="mt-3 flex items-center justify-between">

            <h3 className="text-xl font-semibold">

              {formatCurrency(product.price)}

            </h3>

            <div className="flex items-center gap-3 text-center">

              <Button

                variant="outline"

                className="h-8 w-8 rounded-xl"

                onClick={handleDecreaseQuantity}

              >

                <ChevronLeftIcon />

              </Button>

              <p className="w-4">{quantity}</p>

              <Button

                variant="destructive"

                className="h-8 w-8 rounded-xl"

                onClick={handleIncreaseQuantity}

              >

                <ChevronRightIcon />

              </Button>

            </div>

          </div>

  

          <ScrollArea className="h-full">

            {/* SOBRE*/}

            <div className="mt-6 space-y-3">

              <h4 className="font-semibold">Sobre</h4>

              <p className="text-sm text-muted-foreground">

                {product.description}

              </p>

            </div>

  

            {/* INGREDIENTES */}

            <div className="mt-6 space-y-3 pb-24">

              <div className="flex items-center gap-1.5">

                <ChefHatIcon size={18} />

                <h4 className="font-semibold">Ingredientes</h4>

              </div>

              <ul className="list-disc px-5 text-sm text-muted-foreground">

                {product.ingredients.map((ingredient) => (

                  <li key={ingredient}>{ingredient}</li>

                ))}

              </ul>

            </div>

          </ScrollArea>

        </div>

  

        <Button className="w-full rounded-full" onClick={handleToggleCart}>

          Adicionar à Sacola

        </Button>

      </div>

      <CartSheet />

    </>

  );

};

  

export default ProductDetails;
```

Renderiza os detalhes de um produto, permitindo ajustar a quantidade e adicionar itens ao carrinho. Exibe informações como ingredientes, preço e imagem. Utiliza o `CartContext` para atualizar o carrinho.