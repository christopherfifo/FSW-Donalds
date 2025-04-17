'use server'

import { db } from "@/lib/prisma"

export async function cleanupOldOrders() {
  try {
    // Conta o total de pedidos
    const orderCount = await db.order.count()
    
    if (orderCount >= 10) {
      // Encontra os IDs dos 5 pedidos mais antigos
      const oldestOrders = await db.order.findMany({
        take: 5,
        orderBy: { createdAt: 'asc' },
        select: { id: true }
      })

      // Exclui todos os pedidos exceto os 5 mais antigos
      await db.order.deleteMany({
        where: {
          NOT: { id: { in: oldestOrders.map(o => o.id) } }
        }
      })

      console.log('Limpeza de pedidos concluída - mantidos 5 mais recentes')
    }
  } catch (error) {
    console.error('Erro na limpeza de pedidos:', error)
    throw error
  }
}