# Rick and Morty Portal App 🌌

Una aplicación web interactiva inspirada en el universo de **Rick and Morty**, que permite explorar personajes usando la API oficial, con efectos visuales llamativos, animaciones, y una experiencia responsive y moderna.

## 🚀 Características principales

- 🎨 Diseño dinámico con animaciones SVG y Splitting.js.
- 📱 Responsive y adaptado para diferentes tamaños de pantalla.
- 🔍 Búsqueda en tiempo real de personajes por nombre.
- 🧪 Filtros por estado (Alive, Dead, Unknown) y género (Male, Female, Genderless, Unknown).
- 📦 Scroll infinito para carga dinámica de personajes.
- 🧭 Barra lateral (sidebar) interactiva con control total de búsqueda y filtros.
- ✨ Efectos visuales personalizados (portal animado, estrellas flotantes, animación de entrada del título).
- 🎴 Sistema dinámico de tarjetas (cards) con transición animada.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Animaciones personalizadas, flexbox, responsive design)
- JavaScript (modular y orientado a eventos)
- [Rick and Morty API](https://rickandmortyapi.com/)
- [p5.js](https://p5js.org/) (para efectos visuales como estrellas)
- [Splitting.js](https://splitting.js.org/) (para animaciones de texto)
- SVG animado para portal

## 📁 Estructura del proyecto

## 🔎 Funcionalidades detalladas

### 🔍 Buscar personajes
Permite ingresar un nombre (por ejemplo, "Rick") y visualizar los personajes que lo contienen. Usa la API para buscar por coincidencia parcial en tiempo real.

### 🎛️ Filtros
Desde la barra lateral se puede seleccionar:
- **Estado:** Alive, Dead, Unknown.
- **Género:** Male, Female, Genderless, Unknown.

Estos filtros se combinan con la búsqueda para ofrecer resultados más precisos.

### 🔁 Scroll Infinito
Conforme haces scroll hacia abajo, se cargan más personajes automáticamente sin necesidad de paginar manualmente.

### 🌀 Animación de portal y entrada del título
El título principal aparece tras una animación tipo "portal Rick and Morty", usando SVG y animaciones CSS + JS.

## 🧪 Cómo usar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/rick-and-morty-app.git
cd rick-and-morty-app
Abre el archivo index.html en tu navegador o usa un servidor local como Live Server en VS Code.

¡Listo! Empieza a explorar personajes.

🔮 Futuras mejoras
Guardar personajes favoritos localmente.

Modo oscuro 🌙.

Integrar episodios y ubicaciones de la API.

Mejorar la accesibilidad (teclado y lector de pantalla).

🙌 Créditos
Inspirado por la serie Rick and Morty creada por Justin Roiland y Dan Harmon.

API proporcionada por rickandmortyapi.com.

Animaciones con p5.js y Splitting.js.

📄 Licencia
Este proyecto está bajo la licencia MIT. ¡Úsalo, modifícalo y compártelo libremente!


