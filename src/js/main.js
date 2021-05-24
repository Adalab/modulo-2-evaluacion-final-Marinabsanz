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
      if (data.length === 0) {
        result.innerHTML = "no hay resultados en tu búsqueda";
      } else {
        result.innerHTML = "Estos son tus resultados :";
      }

      for (const userShow of data) {
        let htmlDeUnaSerie = "";
        htmlDeUnaSerie +=
          '<li class="js-list changeColor" id="${userShow.show.id}">';
        htmlDeUnaSerie += userShow.show.name + ":" + "</br>";
        const imagesRslt = userShow.show.image;
        if (imagesRslt === null) {
          htmlDeUnaSerie = `<img src= https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f"></img>"`;
        } else {
          htmlDeUnaSerie += `<img src="${userShow.show.image.medium}"/>`;
        }
        htmlDeUnaSerie += "</li>";
        result.innerHTML += htmlDeUnaSerie;
        takeList(userShow); //llamo a la funcion q me llena el array
        console.log(totalSeries);
      }
    });
}

function takeList(userShow) {
  if (userShow.show.image === true) {
    totalSeries.push({
      name: ` ${userShow.show.name}`,
      image: `${userShow.show.image.medium}`,
    });
  } else {
    totalSeries.push({
      name: ` ${userShow.show.name}`,
      image: `https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f`,
    });
  }
}
//coger al hacer click
function resultTotal(evt) {
  const goClick = document.querySelectorAll(".js-list");
  for (const newconst of goClick) {
    goClick.addEventListener("click", resultTotal);
  }
 //añadir fondo a serie clickada
function fill (evt) {
  let clickeado = evt.currentTarget;
  
}
 
}
button.addEventListener("click", searchShows);










//boton para reset
const reloadButton = document.getElementById("#reload");
function reload() {
  location.reload();
}
reloadButton.addEventListener("click", reload, false);
