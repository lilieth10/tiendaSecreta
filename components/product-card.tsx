"use client"

import { Product } from "@/lib/data/products"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/lib/store/cart-store"
import { toast } from "sonner"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
    toast.success(`${product.name} agregado al carrito`)
  }

  return (
    <Link href={`/productos/${product.id}`}>
      <Card className="overflow-hidden border-none bg-card hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            <Badge className="absolute top-4 right-4">
              {product.category}
            </Badge>
          </div>
          <div className="p-6">
            <h3 className="font-playfair text-xl font-semibold mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <p className="font-raleway text-lg font-medium">
                ${product.price.toFixed(2)}
              </p>
              <Button
                variant="outline"
                size="icon"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}