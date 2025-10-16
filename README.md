# Pasapalos Premium

Sitio web estático para Pasapalos Premium. Contiene HTML, CSS, JS y recursos multimedia (imágenes y video).

Estructura del proyecto

- `index.html` — Página principal
- `css/` — Hojas de estilo (Bootstrap y estilos personalizados)
- `js/` — JavaScript (jQuery, plugins y código personalizado)
- `images/` — Imágenes y subcarpetas
- `fonts/` — Fuentes usadas
- `videos/` — Videos

Cómo ver el sitio localmente

1. Abrir `index.html` en un navegador (doble clic o arrastrar a la ventana del navegador). Si usas funcionalidades que requieren servidor (por ejemplo fetch), corre un servidor local simple:

   - Con Python 3:

     ```powershell
     python -m http.server 8000
     ```

   - Con Node (http-server):

     ```powershell
     npx http-server -p 8000
     ```

2. Abrir `http://localhost:8000` en el navegador.

 notas

- El proyecto usa Bootstrap y jQuery locales en la carpeta `js` y `css`.
- Archivos pesados (videos, imágenes grandes) están incluidos en el repo; considera moverlos a un CDN o Git LFS si el repo crece mucho.

