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
git clone https://github.com/liliethramirez/tiendaSecreta.git
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

---

Desarrollado con ❤️ por [Tu Nombre] 