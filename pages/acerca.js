import Head from 'next/head';
import Link from 'next/link';

/**
 * Página “Acerca de” con contenido estático. Esta página demuestra la facilidad
 * de añadir nuevas rutas en un proyecto Next.js. Al desplegar en Cloudflare
 * Pages, cada página se generará como un archivo estático y se servirá desde
 * la red de distribución de contenidos de Cloudflare para ofrecer tiempos de
 * carga rápidos en todo el mundo.
 */
export default function Acerca() {
  return (
    <>
      <Head>
        <title>Acerca de | mifsut.com</title>
      </Head>
      <main style={{
        padding: '2rem',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '2rem' }}>Acerca de mifsut.com</h1>
        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          Esta es una página de ejemplo creada con Next.js. Puedes modificar los
          archivos en el directorio <code>pages/</code> para cambiar el contenido y
          agregar nuevas rutas.
        </p>
        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
          Gracias a Cloudflare Pages, el sitio puede ofrecer tiempos de carga
          rápidos y distribución global sin necesidad de configurar servidores.
        </p>
        <Link href="/">
          <a style={{ marginTop: '2rem', display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
            Volver al inicio
          </a>
        </Link>
      </main>
    </>
  );
}
