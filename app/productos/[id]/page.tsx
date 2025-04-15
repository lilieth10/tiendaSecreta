import { notFound } from "next/navigation"
import { products } from "@/lib/data/products"
import { ProductPageClient } from "./product-page-client"

interface ProductPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id))

  if (!product) {
    notFound()
  }

  return <ProductPageClient product={product} />
} 