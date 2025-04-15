# 🛍️ Tienda Secreta

Una elegante tienda en línea construida con Next.js 14, TypeScript y Tailwind CSS. Este proyecto ofrece una experiencia de compra moderna y atractiva con funcionalidades completas de carrito de compras.

## ✨ Características

- 🎨 Diseño moderno y responsivo
- 🛒 Carrito de compras con persistencia de datos
- 📱 Interfaz adaptativa para todos los dispositivos
- ⚡ Rendimiento optimizado con Next.js
- 🎭 Animaciones suaves con Framer Motion
- 🎯 Navegación intuitiva
- 💳 Página de checkout
- 🔍 Vista detallada de productos

## 🛠️ Tecnologías Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Zustand](https://github.com/pmndrs/zustand) - Gestión de estado
- [Lucide Icons](https://lucide.dev/) - Iconos
- [Sonner](https://sonner.emilkowal.ski/) - Notificaciones toast

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/liliet10/tiendaSecreta.git
cd tiendaSecreta
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
tiendaSecreta/
├── app/                    # Rutas y páginas de la aplicación
│   ├── productos/          # Páginas de productos
│   ├── checkout/           # Página de checkout
│   ├── contacto/           # Página de contacto
│   └── layout.tsx          # Layout principal
├── components/             # Componentes reutilizables
│   ├── ui/                 # Componentes de UI
│   ├── product-card.tsx    # Tarjeta de producto
│   ├── cart-sheet.tsx      # Panel del carrito
│   ├── contact-section.tsx # Sección de contacto
│   ├── featured-products.tsx # Productos destacados
│   ├── hero.tsx           # Hero section
│   ├── navbar.tsx         # Barra de navegación
│   ├── footer.tsx         # Pie de página
│   └── theme-provider.tsx # Proveedor de tema
├── hooks/                  # Custom hooks
├── lib/                    # Utilidades y configuraciones
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes de productos
├── .next/                  # Carpeta de build de Next.js
├── node_modules/          # Dependencias
├── package.json           # Configuración del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── tailwind.config.ts     # Configuración de Tailwind
├── next.config.js         # Configuración de Next.js
└── README.md              # Documentación
```

## 🎨 Diseño

El diseño de la tienda se caracteriza por:
- Paleta de colores elegante y profesional
- Tipografía clara y legible
- Espaciado consistente
- Animaciones sutiles
- Interfaz intuitiva

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👏 Agradecimientos

- [Next.js](https://nextjs.org/) por el increíble framework
- [Tailwind CSS](https://tailwindcss.com/) por los estilos
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [Zustand](https://github.com/pmndrs/zustand) por la gestión de estado

## 🤔 Decisiones Técnicas

- **Next.js 14 (App Router):** Elegido por su rendimiento mejorado, Server Components y las últimas características de React. El App Router facilita la organización de rutas y layouts.
- **TypeScript:** Para mejorar la mantenibilidad del código, detectar errores en tiempo de compilación y mejorar la experiencia de desarrollo.
- **Tailwind CSS:** Seleccionado por su enfoque utility-first que permite construir interfaces personalizadas rápidamente sin escribir CSS tradicional. Se integra perfectamente con Next.js y componentes React.
- **shadcn/ui:** Utilizado como base para los componentes de UI. No es una librería de componentes tradicional, sino una colección de componentes reutilizables que se copian en el proyecto, permitiendo personalización total. Están construidos sobre Radix UI y Tailwind CSS, asegurando accesibilidad y consistencia.
- **Zustand:** Elegido para la gestión de estado global (principalmente el carrito) por su simplicidad, rendimiento y mínima configuración en comparación con otras alternativas como Redux. Su middleware `persist` facilita la sincronización con `localStorage`.
- **Framer Motion:** Incorporado para añadir animaciones y transiciones suaves que mejoran la experiencia de usuario sin sacrificar el rendimiento.
- **Datos JSON Locales:** Para simular una API y poblar el catálogo de productos rápidamente, permitiendo enfocar el desarrollo en el frontend.

## ✨ Extras Implementados

Además de los requisitos mínimos, se implementaron las siguientes funcionalidades extra:

- **Checkout Simulado:** Formulario con validación básica y resumen final de la compra.
- **Modo Oscuro:** Toggle para cambiar entre tema claro y oscuro, con persistencia.
- **Diseño 100% Responsivo:** Adaptación completa a diferentes tamaños de pantalla (mobile-first).
- **Animaciones:** Microinteracciones y transiciones con Framer Motion.
- **Gestión de Estado Avanzada:** Uso de Zustand para el carrito y persistencia.
- **Componentes Reutilizables:** Buenas prácticas en la creación y uso de componentes.
- **Datos Locales:** Productos cargados desde un archivo JSON.

## ⏳ Mejoras Futuras (Si Tuviera Más Tiempo)

- **Autenticación de Usuarios:** Implementar registro e inicio de sesión.
- **Backend Real:** Conectar con una API real para productos y checkout.
- **Filtros Avanzados:** Añadir más opciones de filtrado y ordenamiento en el catálogo.
- **Pruebas Unitarias e Integración:** Añadir tests para asegurar la estabilidad.
- **Optimización de Rendimiento:** Análisis más profundo con Lighthouse y optimizaciones adicionales.
- **Internacionalización (i18n):** Soportar múltiples idiomas.

---

Desarrollado con ❤️ por [ lilieth chacon] 