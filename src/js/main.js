"use strict";

console.log(">> Ready :)");

const urlShow = "https://api.tvmaze.com/search/shows?q=";
const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

function searchShows() {
  const userResult = userText.value;
  fetch(urlShow+userResult)
    .then((response) => response.json())

    //he llamado SHOWS a TODO el json que veo en postman
    //podri ser pepino

    .then((cucumber) => {
     //añadir mas parametros para trastear

     //>pintar y linkear 
if (cucumber.length === 0 ) {
    result.innerHTML += "no hay resultados en tu búsqueda"
    
} else { result.innerHTML += "Estos son tus resultados al buscar " }

      for (const userShow of cucumber) {
         const yourShow= document.createElement ('li');
          
       result.innerHTML += userShow.show.name+":"  +"<br>" 
      //  result.innerHTML += userShow.show.image.original


       ///TENGO QUE PINTAR LA IMAGEN y meter una de relleno si no hay
      }
    });
}
 //limpiar antes de volver a pintar y hoja de reset
button.addEventListener("click", searchShows);
console.log (button);