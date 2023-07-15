var opcionesbur=document.getElementById("menuhamburger")
function mostrarbur(){
  opcionesbur.classList.toggle("mostrar");

}

function mostrarcompras(){
  document.getElementById("carritoaside").classList.toggle("mostrarcompra");
}
function windowclose(){
  document.getElementById("carritoaside").classList.remove("mostrarcompra")
}