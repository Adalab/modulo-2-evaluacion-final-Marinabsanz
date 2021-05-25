const urlShow = "//api.tvmaze.com/search/shows?q=";
//otra opcion sería fetch(`api.tvmaze.com/search/shows?q=${inputText.value}`)

const userText = document.querySelector(".js-user-search");
const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");
let totalUlFav = document.querySelector(".js-shows-listFav"); //const d mis fav
//array de favoritos vacio
let totalSeries = [];
let listFav = [];
