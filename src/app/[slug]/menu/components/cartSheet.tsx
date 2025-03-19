import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import CartProductItem from "./cartProductItems";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/helpers/formatCurrency";
import FinishOrderButton from "./finishOrderButton";

const CartSheet = () => {
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
              <div className="flex justify-between ">                
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>

          <FinishOrderButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;

//todo arrumar a responsividade do cartproductitem
