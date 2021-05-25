"use strict";
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
        result.innerHTML = "No hay resultados en tu búsqueda";
      } else {
        result.innerHTML = "Estos son tus resultados";
        //'<h1 class= "js-h1" ${`Estos son tus resultados`} :" + </h1>';  no me funciona -que falla?
      }

      for (const userShow of data) {
        let htmlDeUnaSerie = "";
        htmlDeUnaSerie += '<li class="js-list" id=#id ="${userShow.show.id}">';
        htmlDeUnaSerie += userShow.show.name + ":" + "</br>";
        const imagesRslt = userShow.show.image;
        if (imagesRslt === null) {
          htmlDeUnaSerie = `<img class= "image-js-replace" src= https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f"></img>"`;
        } else {
          htmlDeUnaSerie += `<img class= "image-js-replace" src="${userShow.show.image.medium}"/>`;
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
    serie.addEventListener("draggable", favoritesChanges); //arrastrar---añadir funcion
  }
}

function favoritesChanges(evt) {
  evt.currentTarget; //lo que selecciono
  const currentSelect = evt.currentTarget; //lo guardo en constante
  currentSelect.classList.toggle("changeColor"); //añado propiedad nueva de css para cambiar color
  //no coge las que tienen imagen replace
  ///seguir
  const currenteselect2= parseInt(currentSelect.dataset['id']);

  console.log("currenteselect2");
  // currentSelect.addEventListener ("dragstart", favoritesChanges);

  //no lo cog no sta definido, pero si    
  // currentSelect.push (id);
}

// ---------seguir  pasos de handlerclickcard ivan para continuar---


// /////LOCAL STORAGE 
// function paintLStorage (){
//   const localStorageFav =localStorage.getItem (favorites);
//   favorites = JSON.parse (localStorageFav);
//   if (favorites === null) {
//     favorites = [];
//   } gotofavResult ();
// }
// necesito q la funct gotofavResult me pesque  los favoritos selecccionados para dsp guardarlos
// function gotofavResult()
// currenteselect2.innerHTML = 'X'





//boton para reset
const reloadButton = document.getElementById("#reload");
function reload() {
  location.reload();
}
reloadButton.addEventListener("click", reload, false);





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