# mifsut.com

Este repositorio contiene el código fuente de un sitio web construido con
**Next.js** para el dominio `mifsut.com`.  Las páginas están definidas en
el directorio [`pages/`](./pages), y Cloudflare Pages se encargará de la
compilación y despliegue automático cuando se conecte este repositorio.

## Estructura

* `package.json` – define las dependencias y scripts de NPM.
* `pages/index.js` – página de inicio con un saludo y enlace a otra página.
* `pages/acerca.js` – página “Acerca de” con contenido de ejemplo.
* `.gitignore` – excluye archivos y carpetas que no deben versionarse.

## Desarrollo local

Para desarrollar localmente, instala las dependencias y ejecuta el servidor de
desarrollo:

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000` en tu navegador.

## Despliegue

Puedes desplegar este sitio con **Cloudflare Pages** conectando tu cuenta de
GitHub/GitLab y seleccionando este repositorio. Cloudflare detectará
automáticamente los comandos de construcción (`npm run build`) y servirá los
archivos generados desde su red global. También puedes vincular tu dominio
personalizado (`mifsut.com`) siguiendo la guía de DNS de Cloudflare.
