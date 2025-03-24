import { PrismaClient } from '@prisma/client'

// Instância global para desenvolvimento (evitar múltiplas instâncias no hot reloading)
const globalForDb = globalThis as unknown as { db: PrismaClient }

export const db =
  process.env.NODE_ENV === 'production'
    ? new PrismaClient()  // Em produção, cria uma única instância
    : globalForDb.db || new PrismaClient()  // Em desenvolvimento, reutiliza a instância global

// Apenas em desenvolvimento, armazenamos a instância global para evitar recriação
if (process.env.NODE_ENV !== 'production') {
  globalForDb.db = db
}