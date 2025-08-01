import Head from 'next/head';
import Link from 'next/link';

/**
 * Página de inicio del proyecto. Esta página presenta un mensaje de bienvenida y
 * enlaza a una segunda página para mostrar cómo Next.js permite rutas
 * dinámicas. En producción, Cloudflare Pages ejecutará automáticamente la
 * compilación de Next.js y servirá los archivos generados.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | mifsut.com</title>
        <meta name="description" content="Sitio web dinámico para mifsut.com" />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bienvenido a mifsut.com</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center' }}>
          Este sitio está construido con <strong>Next.js</strong> y se despliega mediante
          <strong> Cloudflare Pages</strong>. Haz clic en el enlace de abajo para ver una
          página adicional.
        </p>
        <Link href="/acerca">
          <a style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
            Ir a la página “Acerca de”
          </a>
        </Link>
      </main>
    </>
  );
}
