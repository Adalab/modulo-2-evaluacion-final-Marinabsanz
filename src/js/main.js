"use strict";
function searchShows() {
  const userResult = userText.value;

  //  if (userText.length <= 2) {
  // result.innerHTML = "escribe una letrita más!"
  // }
  fetch(urlShow + userResult)
    .then((response) => response.json())

    .then((data) => {
      totalSeries = data; //guardo mis datos de la peticion del servidor en mi  array Global
      if (data.length === 0) {
        result.innerHTML = "No hay resultados en tu búsqueda";
      } else {
        result.innerHTML = "Pincha para guardar en favoritos" + "</br>";
        //'<h1 class= "js-h1" ${`Estos son tus resultados`} :" + </h1>';  no me funciona -que falla?
      }

      for (const userShow of totalSeries) {
        let htmlDeUnaSerie = "";
        htmlDeUnaSerie += `<li class="js-list" id="${userShow.show.id}">`;
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
      listenNowseries(); //llamo a la funcion que me llena el array
      console.log(totalSeries); // AHORA ya está relleno el array global, con las tarjetas pintadas
    });
}

button.addEventListener("click", searchShows);

// function gotofavResult()
// currenteselect2.innerHTML = 'X'

// function onDragStart(event) {
//   event
//     .dataTransfer
//     .setData('Arrastra tus favoritos hacia acá', event.target.id);
// }

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
