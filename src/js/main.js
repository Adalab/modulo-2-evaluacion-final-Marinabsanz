"use strict";

const urlShow = "//api.tvmaze.com/search/shows?q=";

//otra opcion sería fetch(`http://api.tvmaze.com/search/shows?q=${inputText.value}`)
//pero abajo he puesto las dos var concatenadas para entender mejor. (más basto)
const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

////¡probando en poner aqui var d resultados con  texto para despues concatenar
const imagesResult = document.querySelector(".js-series");
// const resultText2 = si lo creo no me va;
//VARIABLES VACIAS
// let cucumber = [];


function searchShows() {
  const userResult = userText.value;


  //lo de la letrita mas iria aqui porq en el otro lado ya m esta viendo los resultados
  fetch(urlShow + userResult)
    .then((response) => response.json())
    //CUCUMBER --DATA a TODO el json que veo en postman
    .then((cucumber) => {
      if (cucumber.length === 0) {
        result.innerHTML = "no hay resultados en tu búsqueda";
    
        // result.innerHTML = "Introduce una letrita más";
      } else {
        
        result.innerHTML = "Estos son tus resultados:";
      }
      //no quiero que me autocomplete
      //necesito refrescar al darle al boton, ADD Y REMOVE
      for (const userShow of cucumber) {
        let htmlDeUnaSerie = '';

        const liShow = document.createElement("li"); //Mal no mezclar hasta entenderlo
        htmlDeUnaSerie += '<li class="js-listR" id="${userShow.show.id}">';
        htmlDeUnaSerie += userShow.show.name + ":" +"</br>";
        const imagesRslt = userShow.show.image;
        if (imagesRslt === null) {
          htmlDeUnaSerie = `<img src= "https://placekitten.com/200/300"></img>"`;
        } else {
          htmlDeUnaSerie += `<img src="${userShow.show.image.medium}"/>`;
          //var 
          //  `<img src="$ {imagesRslt.medium} "/>`   
          //por q no me funciona asi si le he dado 
          //una constante?
        }
        htmlDeUnaSerie += '</li>';

        result.innerHTML += htmlDeUnaSerie;
      }

      docum.querySelectorAll(".js-listR");
      
    });
}

button.addEventListener("click", searchShows);

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
