//FAVORITAS

//NEXT STEP//

function listenNowseries() {
  const allShows = document.querySelectorAll(".js-list");
  for (const serie of allShows) {
    serie.addEventListener("click", favoritesChanges);

    // serie.addEventListener("onDragStart", favoritesChanges);    arrastrar---añadir funcion
  }
}

function favoritesChanges(evt) {
  evt.currentTarget; //lo que selecciono
  const currentSelect = evt.currentTarget; //lo guardo en constante
  currentSelect.classList.toggle("changeColor"); //añado propiedad nueva de css para cambiar color
  console.log(currentSelect);

  currentSelect2 = parseInt(currentSelect.id);
  console.log(currentSelect2);
  const serieFound = listFav.find(
    (serie) => serie.show.id === currentSelect2
  );
  console.log(serieFound);
 ///necesito volver a recorrer la
 // vag global y sacarle algo apra mostrar cuando no este definido
  
  if (serieFound ===  undefined) {
    const serieNoTFound = totalSeries.find(
      (serie) => serie.show.id === currentSelect2
    );
    listFav.push(serieNoTFound);
  }
  paintFavoritesTotal()
  }

///PINTAR FAVORITOS

function paintFavoritesTotal() {
  let htmlDeUnaSerie = "";
  totalUlFav.innerHTML = "";
  for (const serie of listFav) {
    htmlDeUnaSerie += `<li class="js-list" id="${serie.show.id}">`;
    htmlDeUnaSerie += serie.show.name + ":" + "</br>";
    const imagesRslt = serie.show.image;
    if (imagesRslt === null) {
      htmlDeUnaSerie = `<img class= "image-js-replace" src= https://www.panatier.es/web/image/product.template/7363/image?unique=d772d4f"></img>"`;
    } else {
      htmlDeUnaSerie += `<img class= "image-js-replace" src="${serie.show.image.medium}"/>`;
    }
    htmlDeUnaSerie += "</li>";
//le podria haber dadoa  las 2 el mismo nombre de usershow o serie al empezar y acabar las constantes en la funcion for//


    // takeList(userShow); //llamo a la funcion que me llena el array
  }
  totalUlFav.innerHTML = htmlDeUnaSerie;
}



/////LOCAL STORAGE
// ---set item de mi listfav y luego el get 

function paintLStorage (){
  const localStorageFav =localStorage.getItem (favorites);
  favorites = JSON.parse (localStorageFav);
  if (favorites === null) {
    favorites = [];
  } gotofavResult ();
}



///INTENTANDO LO DE ARRASTRAR- DROP DRAG
//  <div id= "drop-zone" ondrop= "dropHandler(evt) ;">
//  <p> arrastra y suelta tus pelis aquí</p>
//  console.log ("drop-zone")
//  </div>



