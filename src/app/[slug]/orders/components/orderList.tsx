"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/formatCurrency";
import { OrderStatus, Prisma } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="space-y-6 p-6">
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full"
        onClick={handleBack}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="flex items-center gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus Pedidos</h2>
      </div>
      {orders.map((order) => (
        <Card key={order.id} className="p-4">
          <CardContent className="space-y-4 p-5">
            <div
              className={`w-fit rounded-full px-2 py-1 text-xs font-semibold text-white ${getStatusColor(
                order.status,
              )}`}
            >
              {getStatusLabel(order.status)}
            </div>
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  fill
                  src={order.restaurant.avatarImageUrl}
                  alt={order.restaurant.name}
                  className="rounded-sm"
                />
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
