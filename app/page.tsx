import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProducts />
    </div>
  )
}