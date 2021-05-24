"use strict";

const urlShow = "//api.tvmaze.com/search/shows?q=";

//otra opcion sería fetch(`http://api.tvmaze.com/search/shows?q=${inputText.value}`)
//pero abajo he puesto las dos var concatenadas para entender mejor. (más basto)
const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");
//arra de faviritos vacio
let totalSeries=  [];
let listFav = [];

function searchShows() {
  const userResult = userText.value;
  //lo de PON la letrita mas iria aqui ---
  fetch(urlShow + userResult)
    .then((response) => response.json())
    //CUCUMBER --DATA a TODO el json que veo en postman
    .then((cucumber) => {
      if (cucumber.length === 0) {
        result.innerHTML = "no hay resultados en tu búsqueda";
      } else {
        result.innerHTML = "Estos son tus resultados :";
      }

      for (const userShow of cucumber) {
        let htmlDeUnaSerie = "";
        htmlDeUnaSerie += '<li class="js-result changeColor" id="${userShow.show.id}">';
        htmlDeUnaSerie += userShow.show.name + ":" + "</br>";
        const imagesRslt = userShow.show.image;
        if (imagesRslt === null) {
          htmlDeUnaSerie = `<img src= "https://placekitten.com/200/300"></img>"`;
        } else {
          htmlDeUnaSerie += `<img src="${userShow.show.image.medium}"/>`;
        }
        htmlDeUnaSerie += "</li>";
        result.innerHTML += htmlDeUnaSerie;
        takeList (userShow)   //llamo a la funcion q me llena el array
        console.log (totalSeries);
      }   
    });
}

function takeList (userShow) {
  if (userShow.show.image === true) {
    totalSeries.push ({name:` ${userShow.show.name}`, imagen: `${userShow.show.image.medium}` })

  } else {
    totalSeries.push ({name: ` ${userShow.show.name}`, imagen: `https://placekitten.com/200/300` })
  };
}


function funct (evt) {
  let selectionTotal = evt.currentTarget;
}
button.addEventListener("click", searchShows);




//botom para reset, dar id a nuevo boton que haga de refrescar--
// const reloadButton = document.getElementById("#reload");
// function reload() {
//   location.reload();
// }
// reloadButton.addEventListener("click", reload, false);
