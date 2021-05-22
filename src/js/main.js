"use strict";

const urlShow = "https://api.tvmaze.com/search/shows?q=";
const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

const urlImageFill = "https://placekitten.com/200/300";
//VARIABLES VACIAS
// let cucumber = [];
// let favoritos = [];

function searchShows() {
  const userResult = userText.value;
  fetch(urlShow + userResult)
    .then((response) => response.json())

    //he llamado CUCUMBER a TODO el json que veo en postman
    .then((cucumber) => {
      //añadir mas parametros para trastear

      //>pintar y linkear
      if (cucumber.length === 0) {
        result.innerHTML += "no hay resultados en tu búsqueda";
      } else if  (cucumber.length >= 2 ) {
        result.innerHTML = "Introduce una letrita más";
      } else {
        result.innerHTML += "Estos son tus resultados al buscar ";
      }

      for (const userShow of cucumber) {
        const lihow = document.createElement("li");

        result.innerHTML += userShow.show.name + ":" + "<br>";
      }
    });
}

button.addEventListener("click", searchShows);

///TENGO QUE PINTAR LA IMAGEN y meter una de relleno si no hay
//limpiar antes de volver a pintar y hoja de reset
