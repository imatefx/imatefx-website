import { useEffect, useState, useCallback } from "react"
import { initializePaddle, type Paddle } from "@paddle/paddle-js"

export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const clientToken = import.meta.env.VITE_PADDLE_CLIENT_TOKEN

    if (!clientToken) {
      setLoading(false)
      setError(new Error("Paddle client token not configured"))
      return
    }

    initializePaddle({
      environment:
        import.meta.env.VITE_PADDLE_ENVIRONMENT === "production"
          ? "production"
          : "sandbox",
      token: clientToken,
    })
      .then((paddleInstance) => {
        if (paddleInstance) {
          setPaddle(paddleInstance)
        } else {
          setError(new Error("Failed to initialize Paddle"))
        }
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  const openCheckout = useCallback(
    (priceId: string) => {
      if (!paddle) {
        console.error("Paddle not initialized")
        return
      }

      paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
      })
    },
    [paddle]
  )

  return { paddle, loading, error, openCheckout }
}
