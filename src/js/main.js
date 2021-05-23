"use strict";

const urlShow = "https://api.tvmaze.com/search/shows?q=";

//otra opcion sería fetch(`http://api.tvmaze.com/search/shows?q=${inputText.value}`)
//pero abajo he puesto las dos var concatenadas para entender mejor. (más basto)
const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");
const imagesResult = document.querySelector(".js-series");
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
     
      }
       else {result.innerHTML += "Estos son tus resultados al buscar : ";

       }
      //no quiero que me autocomplete
      //necesito refrescar al darle al boton, ADD Y REMOVE
      for (const userShow of cucumber) {
        const liShow = document.createElement("li");

      result.innerHTML += userShow.show.name + ":" + "</br>";

      const imagesRslt= userShow.show.image;
      if (imagesRslt  === null) {
        result.innerHTML= `<img src= "https://via.placeholder.com/210x295/ffffff/666666/?text=TV "></img>`
      } else {
       result.innerHTML +=  `<img src="${userShow.show.image.medium}"/>`; 
       
       
      //  `<img src="$ {imagesRslt.medium} "/>`
      }
    
      
   
      }
    });
}

button.addEventListener("click", searchShows);
function del() {
  button.addEventListener("DataTransfer", delente);
}

// REFRESCAR BUSQUEDA- como hacer, sin click, q otra opcion?
// asi me desaparece al instante- me vale para favoritos 
// const reloadButton = document.getElementById("#reload");
// function reload() {
//   location.reload();

// }
// reloadButton.addEventListener("click", reload, false);

//limpiar antes de volver a pintar y hoja de reset





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