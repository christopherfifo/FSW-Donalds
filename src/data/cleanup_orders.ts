import { db } from "@/lib/prisma";

export async function cleanupOrders(restaurantSlug: string) {
  console.log(`🚀 Iniciando limpeza para: ${restaurantSlug}`);

  try {
    if (!restaurantSlug?.trim()) {
      throw new Error("Slug inválido");
    }

    const restaurant = await db.restaurant.findUnique({
      where: { slug: restaurantSlug },
      select: { id: true, name: true },
    });

    if (!restaurant) {
      throw new Error("Restaurante não encontrado");
    }

    await db.$transaction(async (tx) => {
      const orderCount = await tx.order.count({
        where: { restaurantId: restaurant.id },
      });

      if (orderCount >= 10) {
        // Buscar os 5 pedidos mais antigos
        const oldestOrders = await tx.order.findMany({
          where: { restaurantId: restaurant.id },
          take: 5,
          orderBy: { createdAt: "asc" }, // Ordenar por mais antigos
          select: { id: true },
        });

        // Excluir todos os pedidos que não estão entre os 5 mais antigos
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
  } finally {
    await db.$disconnect();
  }
}