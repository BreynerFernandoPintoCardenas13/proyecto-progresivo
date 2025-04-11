const urlBase = "https://rickandmortyapi.com/api/character ";
const contenedor = document.getElementById("contenedor");
const urlImage= "https://rickandmortyapi.com/api/character/image"
    
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        const characters = data.results;
        const container = document.getElementById("container__main");
  
        characters.forEach(character => {
          // Crear el contenedor de la card
          const card = document.createElement("div");
          card.classList.add("div-card");
  
          // Insertar el HTML dentro de la card con los datos del personaje
          card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <div class="div-cardText">
              <div class="div-nameState">
                <a href="#"><h2>${character.name}</h2></a>
                <h3>${character.status}</h3>
              </div>
              <div class="div-location">
                <span class="span-1">Last known location:</span>
                <a href="#"><span class="span-2">${character.location.name}</span></a>
              </div>
              <div class="div_seen">
                <span class="span-1">First seen in:</span>
                <a href=#><span class="span-2">${character.origin.name}</span></a>
              </div>
            </div>
          `;
  
          // Agregar la card al contenedor
          container.appendChild(card);
        });
      })
      .catch(error => console.error("Error al cargar los personajes:", error));
  });
  
/*
    CARGAR MAS PERSONAJESSSSSSS
*/ 
let nextPage = "https://rickandmortyapi.com/api/character";
let loading = false;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container__main");
    
  // Función para cargar personajes
  const loadCharacters = () => {
    if (loading || !nextPage) return;
    loading = true;

    fetch(nextPage)
      .then(res => res.json())
      .then(data => {
        // Actualiza la URL para la siguiente página
        nextPage = data.info.next;
        data.results.forEach(character => {
          const status = character.status;
            function emoji(status){
                if (status === "Alive") return "Alive 😇";
                if (status === "Dead") return "Dead 💀";
                return "Unkown ❓"
            }
            const guardarEmoji= emoji(character.status)
          const card = document.createElement("div");
          card.classList.add("div-card");

          card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <div class="div-cardText">
              <div class="div-nameState">
                <a href="#"><h2>${character.name}</h2></a>
                <h3 id="state">${guardarEmoji}</h3>
              </div>
              <div class="div-location">
                <span class="span-1">Last known location:</span>
                <a href="#"><span class="span-2">${character.location.name}</span></a>
              </div>
              <div class="div_seen">
                <span class="span-1">First seen in:</span>
                <a href=""><span class="span-2">${character.origin.name}</span></a>
              </div>
            </div>
          `;

          container.appendChild(card);
        });

        loading = false;
      })
      .catch(error => {
        console.error("Error al cargar personajes:", error);
        loading = false;
      });
  };

  // Carga inicial
  loadCharacters();

  // Detectar scroll
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      loadCharacters();
    }
  });
});
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();

  if (query.length === 0) {
    // Si el input está vacío, recargamos los personajes normales
    resetAndLoadInitialCharacters();
    return;
  }

  // Buscar personajes por nombre en la API
  fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("container__main");
      container.innerHTML = ""; // Limpiar cards anteriores

      data.results.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("div-card");

        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <div class="div-cardText">
            <div class="div-nameState">
              <a href="#"><h2>${character.name}</h2></a>
              <h3>${character.status}</h3>
            </div>
            <div class="div-location">
              <span class="span-1">Last known location:</span>
              <a href="#"><span class="span-2">${character.location.name}</span></a>
            </div>
            <div class="div_seen">
              <span class="span-1">First seen in:</span>
              <a href="#"><span class="span-2">${character.origin.name}</span></a>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      const container = document.getElementById("container__main");
      container.innerHTML = "<p style='color:white;'>No se encontró ningún personaje.</p>";
      console.error("Error en búsqueda:", error);
    });
});
const genderFilter = document.getElementById("genderFilter");

genderFilter.addEventListener("change", () => {
  const gender = genderFilter.value; // 'male', 'female', 'unknown' o ''
  const query = searchInput.value.trim().toLowerCase(); // nombre buscado si hay

  let url = `https://rickandmortyapi.com/api/character/?`;

  if (query) {
    url += `name=${query}&`;
  }

  if (gender) {
    url += `gender=${gender}`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("container__main");
      container.innerHTML = "";

      data.results.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("div-card");

        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <div class="div-cardText">
            <div class="div-nameState">
              <a href="#"><h2>${character.name}</h2></a>
              <h3>${character.status}</h3>
            </div>
            <div class="div-location">
              <span class="span-1">Last known location:</span>
              <a href="#"><span class="span-2">${character.location.name}</span></a>
            </div>
            <div class="div_seen">
              <span class="span-1">First seen in:</span>
              <a href="#"><span class="span-2">${character.origin.name}</span></a>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      const container = document.getElementById("container__main");
      container.innerHTML = "<p style='color:white;'>No se encontraron personajes con ese filtro.</p>";
      console.error("Error al filtrar:", error);
    });
});



/* SIDE BARRRRRR */
const btnSideBar= document.getElementById("btn-sidebar");
const sidebar = document.getElementById("article__sidebar")
const contenido = document.getElementById("article__main")
const overlay = document.getElementById("overlay")

btnSideBar.addEventListener("click", ()=>{
    if (sidebar.style.width==="20%") {
        cerrarMenu();
    }else{
        abrirMenu()
    }
})
overlay.addEventListener("click", ()=>{
    cerrarMenu();
})
function abrirMenu(){
    sidebar.style.width = "30%";
    overlay.style.display = "block";
}

function cerrarMenu(){
    sidebar.style.width = "0";
    overlay.style.display = "none";

}
window.addEventListener("scroll", () => {
    const hero = document.getElementById("hero");
    
    if (window.scrollY > 50) {
      hero.style.height = "500px"; // Nuevo tamaño cuando se hace scroll
    } else {
      hero.style.height = "1000px"; // Tamaño original
    }
  });

  console.clear();

Splitting();

let el = document.body;

el.addEventListener("click", function () {
  el.hidden = true;
  requestAnimationFrame(() => {
    el.hidden = false;
  });
});

requestAnimationFrame(() => {
  document.body.dataset.play = true;
});


/* SUB MENU GENEROOOO  SIDEE BARRR*/
