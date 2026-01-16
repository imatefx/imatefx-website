import { initializePaddle } from "@paddle/paddle-js"
import type { Paddle } from "@paddle/paddle-js"

let paddleInstance: Paddle | null = null

export async function getPaddle(): Promise<Paddle | null> {
  if (paddleInstance) {
    return paddleInstance
  }

  const token = import.meta.env.VITE_PADDLE_CLIENT_TOKEN

  if (!token) {
    console.warn("Paddle client token not configured")
    return null
  }

  try {
    const instance = await initializePaddle({
      token,
      environment: import.meta.env.DEV ? "sandbox" : "production",
    })
    paddleInstance = instance ?? null
    return paddleInstance
  } catch (error) {
    console.error("Failed to initialize Paddle:", error)
    return null
  }
}

export interface CheckoutOptions {
  priceId: string
  email?: string
  successUrl?: string
}

export async function openCheckout(options: CheckoutOptions): Promise<void> {
  const paddle = await getPaddle()

  if (!paddle) {
    console.error("Paddle not initialized")
    return
  }

  paddle.Checkout.open({
    items: [{ priceId: options.priceId, quantity: 1 }],
    customer: options.email ? { email: options.email } : undefined,
    settings: {
      successUrl: options.successUrl || `${window.location.origin}/thank-you`,
      displayMode: "overlay",
      theme: "dark",
      locale: "en",
    },
  })
}
