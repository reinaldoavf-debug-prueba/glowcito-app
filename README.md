# Glowcito Beauty Studio

Starter de Next.js para desplegar en Vercel. Incluye una interfaz responsive con animaciones breves, selector de tema, agenda de demostración y formulario de reserva de demostración.

## Importante
Esta versión inicial todavía usa datos temporales del navegador/memoria para mostrar la experiencia. No debe usarse para reservas reales hasta conectar Supabase, configurar autenticación y activar políticas RLS. Las claves de Supabase no se deben pegar en el código ni subir a GitHub.

## Configuración local
1. Instala Node.js 20 o superior.
2. Copia `.env.example` a `.env.local` y rellena la URL y la clave pública de Supabase.
3. Ejecuta `npm install` y `npm run dev`.

## Despliegue
Importa el repositorio en Vercel. Añade las variables `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` en Project Settings → Environment Variables.
