"use client"

import { Product } from "@/lib/data/products"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart-store"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

interface ProductPageClientProps {
  product: Product
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="font-semibold mb-2">Descripción</h2>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Categoría</h2>
                <p className="text-muted-foreground">{product.category}</p>
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Agregar al Carrito
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 