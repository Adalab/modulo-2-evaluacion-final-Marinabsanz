"use strict";

const urlShow = "https://api.tvmaze.com/search/shows?q=";
const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

////NO ME VAn
const image = document.querySelector("js-image");
const urlImageFill = "https://placekitten.com/200/300";
//VARIABLES VACIAS
// let cucumber = [];
// let favoritos = [];

function searchShows() {
  const userResult = userText.value;
  fetch(urlShow + userResult)
    .then((response) => response.json())

    //CUCUMBER --DATA a TODO el json que veo en postman
    .then((cucumber) => {
     
      if (cucumber.length === 0) {
        result.innerHTML += "no hay resultados en tu búsqueda";
      } else if (cucumber.length <= 2) {
        result.innerHTML = "Introduce una letrita más";
      } else {
        result.innerHTML += "Estos son tus resultados al buscar ";
      }
//no quiero que me autocomplete
//necesito refrescar al darle al boton, ADD Y REMOVE
      for (const userShow of cucumber) {
        const liShow = document.createElement("li");
        result.innerHTML += userShow.show.name + ":" + "<br>";
        result.innerHTML += `<img src="${userShow.show.image.medium}"/>`;
        const imgResult = `<img src="${userShow.show.image.medium}"/>`;
  
       
     
        // DE ESTA FORMA ME SALEN REPES LA IMAG y el null no funciona cn if else
        // if (cucumber === null) {
        //   result.innerHTML += "no hay fotos";
        // for (const imgResult of cucumber) {
        //   let i= 0
        //  
        //   } else {
        //     result.innerHTML += i+ `<img src="${userShow.show.image.medium}"/>`;
        //   }
          
        // }
      }
    });
}

button.addEventListener("click", searchShows);

//limpiar antes de volver a pintar y hoja de reset
