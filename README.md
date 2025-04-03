  

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

├─ .next/

│  ├─ cache/

│  │  ├─ images/

│  │  │  ├─ image1.webp

│  │  │  ├─ image2.webp

│  │  │  ├─ image3.webp

│  │  │  └─ image4.webp

│  │  └─ other-cache-files/

│  ├─ server/

│  ├─ static/

│  └─ other-generated-files/

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

│  │  └─ migration_lock.toml

│  ├─ schema.prisma

│  └─ seed.ts

├─ public/

│  ├─ dine_in.png

│  ├─ logo.png

│  └─ takeaway.png

├─ src/

│  ├─ app/

│  │  ├─ [slug]/

│  │  │  ├─ components/

│  │  │  │  ├─ consumption-method-option.tsx

│  │  │  │  └─ inactivityRedirect.tsx

│  │  │  ├─ menu/

│  │  │  │  ├─ [productId]/

│  │  │  │  │  ├─ components/

│  │  │  │  │  │  ├─ productDetails.tsx

│  │  │  │  │  │  └─ productHeader.tsx

│  │  │  │  │  ├─ page.tsx

│  │  │  │  │  └─ productsPageSkeleton.tsx

│  │  │  │  ├─ components/

│  │  │  │  │  ├─ cartProductItems.tsx

│  │  │  │  │  ├─ cartSheet.tsx

│  │  │  │  │  ├─ categories.tsx

│  │  │  │  │  ├─ finishOrderButton.tsx

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

│  │  │  ├─ sheet.tsx

│  │  │  └─ skeleton.tsx

│  │  └─ homePageSkeleton.tsx

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

Este componente redireciona o usuário para a página do restaurante passando na ``URL`` o restaurante que esta sendo referenciado, ou seja, o ``Slug``.

### ``[Slug]`` 

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

#### 1. Função ``get-restaurant-by-slug``
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

Este arquivo busca um restaurante no banco de dados com base no `slug`.

- Usa o Prisma (`db`) para consultar o restaurante na tabela `restaurant`.
- Retorna os dados do restaurante ou `null` caso não exista.

#### 2. Componente  ``ConsumptionMethodOption`` 

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

#### 3. Função ``InactivityRedirect``
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

Este componente redireciona o usuário para a página anterior após um período de inatividade.

- Usa `useEffect` para definir um temporizador de **180 segundos**.
- Reinicia o temporizador ao detectar eventos como `mousemove`, `keydown` ou `touchstart`.
- Após o tempo limite, redireciona o usuário para a página anterior com `router.back()`.