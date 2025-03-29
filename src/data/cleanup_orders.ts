"use server";

import { db } from "@/lib/prisma";

export async function cleanupOrders(restaurantSlug: string) {
  console.log(`🚀 Iniciando limpeza para: ${restaurantSlug}`);

  try {
    if (!restaurantSlug?.trim()) {
      throw new Error("Slug inválido");
    }

    const restaurant = await db.restaurant.findUnique({
      where: { slug: restaurantSlug },
      select: { id: true },
    });

    if (!restaurant) {
      throw new Error("Restaurante não encontrado");
    }

    await db.$transaction(async (tx) => {
      const orderCount = await tx.order.count({
        where: { restaurantId: restaurant.id },
      });

      if (orderCount >= 10) {
        const oldestOrders = await tx.order.findMany({
          where: { restaurantId: restaurant.id },
          take: 5,
          orderBy: { createdAt: "asc" },
          select: { id: true },
        });

        await tx.order.deleteMany({
          where: {
            restaurantId: restaurant.id,
            NOT: { id: { in: oldestOrders.map((o) => o.id) } },
          },
        });
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Erro na limpeza:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido",
    };
  }
}
