"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const OrderListSkeleton = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Botão de voltar */}
      <Skeleton className="h-10 w-10 rounded-full" />
      
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-6" />
        <Skeleton className="h-6 w-40" />
      </div>

      {/* Cards de pedidos (3 exemplares) */}
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="p-4">
          <CardContent className="space-y-4 p-5">
            {/* Status */}
            <Skeleton className="h-6 w-24 rounded-full" />
            
            {/* Restaurante */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded-sm" />
              <Skeleton className="h-4 w-32" />
            </div>
            
            <Separator />
            
            {/* Itens do pedido (3 itens por pedido) */}
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((_, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-48" />
                </div>
              ))}
            </div>
            
            <Separator />
            
            {/* Total */}
            <Skeleton className="h-4 w-20" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderListSkeleton;