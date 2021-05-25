//botón para reset

const reloadButton = document.getElementById("#reload");
function reload() {
  location.reload();
}
reloadButton.addEventListener("click", reload, false);
