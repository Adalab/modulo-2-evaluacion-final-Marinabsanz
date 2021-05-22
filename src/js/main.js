"use strict";

console.log(">> Ready :)");

const urlShow = "https://api.tvmaze.com/search/shows?q=girls";

function searchSHows() {
  fetch(urlShow)
    .then((response) => response.json())
    .then((data) => {
      urlShow;
    });
}
