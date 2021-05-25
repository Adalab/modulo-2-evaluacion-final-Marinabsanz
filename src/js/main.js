"use strict";

const urlShow = "//api.tvmaze.com/search/shows?q=";
//otra opcion sería fetch(`api.tvmaze.com/search/shows?q=${inputText.value}`)

const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");
//array de favoritos vacio
let totalSeries = [];
let listFav = [];

function searchShows() {
  const userResult = userText.value;
  // PON  1 letrita mas ......
  // if (userResult.length <= 2) {
  //  result.innerHTML = "escribe una letrita más!"
  // }
  fetch(urlShow + userResult)
    .then((response) => response.json())

    .then((data) => {
      totalSeries = data; //guardo mis datos de la peticion del servidor en mi  array Global
      if (data.length === 0) {
        result.innerHTML = "no hay resultados en tu búsqueda";
      } else {
        result.innerHTML = "Estos son tus resultados :";
      }

      for (const userShow of data) {
        let htmlDeUnaSerie = "";
        htmlDeUnaSerie += '<li class="js-list" id="${userShow.show.id}">';
        htmlDeUnaSerie += userShow.show.name + ":" + "</br>";
        const imagesRslt = userShow.show.image;
        if (imagesRslt === null) {
          htmlDeUnaSerie = `<img src= https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f"></img>"`;
        } else {
          htmlDeUnaSerie += `<img src="${userShow.show.image.medium}"/>`;
        }
        htmlDeUnaSerie += "</li>";
        result.innerHTML += htmlDeUnaSerie;
        // takeList(userShow); //llamo a la funcion que me llena el array
      }
      listenNowseries();
      console.log(totalSeries); // AHORA ya está relleno el array global, con las tarjetas pintadas
    });
}

button.addEventListener("click", searchShows);

//NEXT STEP//

function listenNowseries() {
  const allShows = document.querySelectorAll(".js-list");
  for (const serie of allShows) {
    serie.addEventListener("click", favoritesChanges);
  }
}

function favoritesChanges(evt) {
  evt.currentTarget; //lo que selecciono
  const currentSelect = evt.currentTarget; //lo guardo en constante
  currentSelect.classList.toggle("changeColor");  //añado propiedad nueva de css para cambiar color

///seguir 


}


 // ---------seguir fUNCION DE IVAN de handlerclickcard para continuar---

////no sirve,
// function takeList(userShow) {
//   if (userShow.show.image === true) {
//     totalSeries.push({
//       name: ` ${userShow.show.name}`,
//       image: `${userShow.show.image.medium}`,
//     });
//   } else {
//     totalSeries.push({
//       name: ` ${userShow.show.name}`,
//       image: `https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f`,
//     });
//   }
// }


// }
 

//boton para reset
const reloadButton = document.getElementById("#reload");
function reload() {
  location.reload();
}
reloadButton.addEventListener("click", reload, false);
