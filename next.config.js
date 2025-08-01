/**
 * Configuración de Next.js para generar una exportación estática.
 * La propiedad `output: 'export'` indica a Next.js que genere
 * los archivos HTML, CSS y JavaScript estáticos en la carpeta `out`
 * al ejecutar `next build`. De este modo, el sitio puede ser desplegado
 * en servicios como Cloudflare Pages sin necesidad de un servidor Node.js.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Se puede descomentar la siguiente línea para cambiar el nombre de la
  // carpeta de salida (por defecto es 'out'):
  // distDir: 'out',
};

export default nextConfig;
