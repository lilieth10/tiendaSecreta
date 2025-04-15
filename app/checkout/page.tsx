import { Metadata } from "next"
import { CheckoutForm } from "@/components/checkout-form"

export const metadata: Metadata = {
  title: "Checkout - Tienda Secreta",
  description: "Completa tu compra de manera segura y rápida en Tienda Secreta",
  keywords: ["checkout", "pago", "compra", "tienda", "ecommerce"],
}

export default function CheckoutPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Finalizar Compra</h1>
        <CheckoutForm />
      </div>
    </main>
  )
} 