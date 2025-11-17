# Marina Romeo

Sitio web profesional para Marina Romeo - Licenciada en Composición Coreográfica, performer, docente y entrenadora especializada en danza, patinaje artístico y entrenamiento físico.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- shadcn/ui + Radix UI

## Instalación

```bash
npm install
npm run dev
```

## Configuración

Actualizar el número de WhatsApp en `src/lib/constants.ts`:

```typescript
export const WHATSAPP_NUMBER = "5491123456789";
```

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Producción
npm run start    # Servidor producción
npm run lint     # Linting
```

## Estructura

```
src/
├── app/              # Next.js App Router
├── components/       # Componentes React
│   ├── sections/    # Secciones de la página
│   └── ui/          # Componentes UI
└── lib/             # Utilidades y constantes
```

## Imágenes Requeridas

- `public/1 .jpeg` - About Me 1
- `public/2.jpeg` - About Me 2
- `public/3.jpeg` - About Me 3
- `public/4.jpeg` - About Me 4
- `public/contacto.jpeg` - Contacto
- `public/hero-video.mp4` - Hero (opcional)

## Convenciones

Ver `.cursorrules` para convenciones de código completas.

## Deployment

Listo para Vercel, Netlify o cualquier plataforma que soporte Next.js.
