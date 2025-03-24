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

//todo arrumar a responsividade do cartproductitem
