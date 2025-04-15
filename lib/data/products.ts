export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Espejo de Obsidiana",
    price: 299.99,
    image: "/images/espejo-obsidiana.jpg",
    category: "Místico",
    description: "Espejo tallado en obsidiana negra, conocido por sus propiedades místicas."
  },
  {
    id: 2,
    name: "Reloj de Arena Eterno",
    price: 499.99,
    image: "/images/Reloj arena.jpg",
    category: "Temporal",
    description: "Un reloj de arena que parece desafiar las leyes del tiempo."
  },
  {
    id: 3,
    name: "Lámpara de Cristales",
    price: 399.99,
    image: "/images/Lampara de cristales.webp",
    category: "Iluminación",
    description: "Lámpara artesanal con cristales que emiten un brillo místico."
  },
  {
    id: 4,
    name: "Grimorio Antiguo",
    price: 799.99,
    image: "/images/Grimonio necronomicon.jpg",
    category: "Místico",
    description: "Libro ancestral con páginas que parecen contener sabiduría olvidada."
  },
  {
    id: 5,
    name: "Péndulo de Cuarzo",
    price: 149.99,
    image: "/images/Pendulo de cuarzo.jpg",
    category: "Místico",
    description: "Péndulo de cuarzo rosa para la adivinación y la sanación."
  },
  {
    id: 6,
    name: "Brújula Astral",
    price: 599.99,
    image: "/images/Brujula astral.avif",
    category: "Navegación",
    description: "Brújula que señala hacia destinos más allá de este mundo."
  },
  {
    id: 7,
    name: "Caja Musical Encantada",
    price: 449.99,
    image: "/images/Caja musical.jpg",
    category: "Musical",
    description: "Caja musical que toca melodías nunca antes escuchadas."
  },
  {
    id: 8,
    name: "Cristal de Cuarzo",
    price: 199.99,
    image: "/images/cristal-cuarzo.jpg",
    category: "Místico",
    description: "Cristal de cuarzo natural con propiedades energéticas."
  },
  {
    id: 9,
    name: "Mapa Estelar",
    price: 349.99,
    image: "/images/Mapa estelar.webp",
    category: "Navegación",
    description: "Mapa detallado de las constelaciones y sus secretos."
  },
  {
    id: 10,
    name: "Velas Aromáticas",
    price: 89.99,
    image: "/images/Velas aromaticas.jpg",
    category: "Iluminación",
    description: "Set de velas con fragancias místicas y relajantes."
  },
  {
    id: 11,
    name: "Talismán Protector",
    price: 249.99,
    image: "/images/Talisman.jpg",
    category: "Místico",
    description: "Talismán ancestral para protección y buena fortuna."
  },
  {
    id: 12,
    name: "Incienso Mágico",
    price: 69.99,
    image: "/images/Incienso.jpg",
    category: "Místico",
    description: "Set de inciensos con propiedades espirituales."
  },
  {
    id: 13,
    name: "Esfera de Cristal",
    price: 399.99,
    image: "/images/Esfera de cristal.jpg",
    category: "Místico",
    description: "Esfera de cristal para la adivinación y meditación."
  },
  {
    id: 14,
    name: "Libro de Hechizos",
    price: 599.99,
    image: "/images/Necronomicon.jpg",
    category: "Místico",
    description: "Compendio de hechizos y rituales antiguos."
  },
  {
    id: 15,
    name: "Candelabro Mágico",
    price: 299.99,
    image: "/images/Candelabro.avif",
    category: "Iluminación",
    description: "Candelabro decorativo con diseños místicos."
  }
]

export const categories = Array.from(new Set(products.map(p => p.category)));