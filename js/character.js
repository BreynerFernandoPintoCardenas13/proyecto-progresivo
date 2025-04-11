// character.js
const id = getParam('id');
fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.json())
  .then(data => {
    // aquí llenas la página con los datos del personaje
    document.querySelector("#characterName").textContent = data.name;
    document.querySelector("#characterImage").src = data.image;
    // y así con el resto
  });
