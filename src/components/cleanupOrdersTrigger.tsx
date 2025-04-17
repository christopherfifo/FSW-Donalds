'use client'

import { useEffect } from 'react'

import { cleanupOldOrders } from '@/actions/cleanup-orders'

export default function CleanupOrdersTrigger() {
  useEffect(() => {
    const checkAndClean = async () => {
      try {
        await cleanupOldOrders()
      } catch (error) {
        console.error('Falha ao limpar pedidos:', error)
      }
    }

    // Verifica a cada 1 minuto (ajuste conforme necessário)
    const interval = setInterval(checkAndClean, 60000)
    
    // Verifica imediatamente ao carregar
    checkAndClean()

    return () => clearInterval(interval)
  }, [])

  return null // Componente invisível
}