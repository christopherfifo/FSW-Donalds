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
