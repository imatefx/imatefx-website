import { useCallback, useEffect, useState } from "react"
import type { Paddle } from "@paddle/paddle-js"
import { getPaddle, openCheckout } from "@/lib/paddle"

export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function init() {
      try {
        const instance = await getPaddle()
        if (mounted) {
          setPaddle(instance)
          setLoading(false)
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to initialize Paddle")
          setLoading(false)
        }
      }
    }

    init()

    return () => {
      mounted = false
    }
  }, [])

  const handleCheckout = useCallback(async (priceId: string, email?: string) => {
    await openCheckout({ priceId, email })
  }, [])

  return {
    paddle,
    loading,
    error,
    openCheckout: handleCheckout,
    isReady: !!paddle && !loading,
  }
}
