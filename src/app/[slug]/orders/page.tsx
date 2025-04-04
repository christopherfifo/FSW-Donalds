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

