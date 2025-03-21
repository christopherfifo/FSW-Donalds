
## 🚀Visão geral

O FSW - Donald’s é uma aplicação web FullStack desenvolvida com o framework Next Js, tendo como base os tokens de auto atendimento da franquia de restaurante McDonald’s, esse sistema inclui funcionalidades como formas de pedidos divididas em comer no local ou levar, criação de um carrinho de compras com possibilidade incrementar ou decrementar a quantidade dos itens do carro, confirmação de pagamento e validação de acesso para o cadastramento e consultas de pedidos do cliente.

🧩 **Status:** em desenvolvimento.

🔗Conheça você mesmo: 

## 📦Estrutura do projeto

- **Linguagem:** TypeScript;
- **Framework:** Next Js;
- **Frontend:** Shadcn, Zod, React-hook-form, Tailwind, React number format;
- **Backend:**  Node e Next Js;
- **Banco de Dados:** PostgreSql e Neon;
- **Outras  ferramentas:** ESLint e ORM Prisma
  
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
│  ├─ cache/
│  │  ├─ images/
│  │  │  ├─ image1.webp
│  │  │  ├─ image2.webp
│  │  │  ├─ image3.webp
│  │  │  └─ image4.webp
│  │  └─ other-cache-files/
│  ├─ server/
│  ├─ static/
│  └─ other-generated-files/
├─ prisma/
│  ├─ migrations/
│  │  ├─ 20250218203014_add_initial_tables/
│  │  │  └─ migration.sql
│  │  ├─ 20250219181605_add_cascade_deletion/
│  │  │  └─ migration.sql
│  │  ├─ 20250219193744_slug_unique/
│  │  │  └─ migration.sql
│  │  ├─ 20250228000747_correcao/
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  ├─ schema.prisma
│  └─ seed.ts
├─ public/
│  ├─ dine_in.png
│  ├─ logo.png
│  └─ takeaway.png
├─ src/
│  ├─ app/
│  │  ├─ [slug]/
│  │  │  ├─ components/
│  │  │  │  ├─ consumption-method-option.tsx
│  │  │  │  └─ inactivityRedirect.tsx
│  │  │  ├─ menu/
│  │  │  │  ├─ [productId]/
│  │  │  │  │  ├─ components/
│  │  │  │  │  │  ├─ productDetails.tsx
│  │  │  │  │  │  └─ productHeader.tsx
│  │  │  │  │  ├─ page.tsx
│  │  │  │  │  └─ productsPageSkeleton.tsx
│  │  │  │  ├─ components/
│  │  │  │  │  ├─ cartProductItems.tsx
│  │  │  │  │  ├─ cartSheet.tsx
│  │  │  │  │  ├─ categories.tsx
│  │  │  │  │  ├─ finishOrderButton.tsx
│  │  │  │  │  ├─ header.tsx
│  │  │  │  │  └─ products.tsx
│  │  │  │  ├─ contexts/
│  │  │  │  │  └─ cart.tsx
│  │  │  │  ├─ data/
│  │  │  │  │  └─ get-restaurant-categories.tsx
│  │  │  │  ├─ helpers/
│  │  │  │  │  └─ cpf.ts
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ RestaurantSkeleton.tsx
│  │  │  ├─ consumptionMethodSkeleton.tsx
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ button.tsx
│  │  │  ├─ card.tsx
│  │  │  ├─ drawer.tsx
│  │  │  ├─ form.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ label.tsx
│  │  │  ├─ scroll-area.tsx
│  │  │  ├─ sheet.tsx
│  │  │  └─ skeleton.tsx
│  │  └─ homePageSkeleton.tsx
│  ├─ data/
│  │  └─ get-restaurant-by-slug.ts
│  ├─ helpers/
│  │  └─ formatCurrency.ts
│  └─ lib/
│     ├─ prisma.ts
│     └─ utils.ts
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

  products: any[];

  total: number;

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

  },0);

  

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

Arquivo do ``layout``

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