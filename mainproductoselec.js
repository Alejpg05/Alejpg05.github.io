var fav=document.getElementById("favbtn")

function mostrarbur(){
    document.getElementById("menuhamburger").classList.toggle("mostrar");
  }

  document.getElementById("regresar") - function(){
    windowclose()
  }



  function mostrarcompras(){
    document.getElementById("carritoaside").classList.toggle("mostrarcompra");
  }
  function windowclose(){
    document.getElementById("carritoaside").classList.remove("mostrarcompra")
  }


  function Togglefav(){
    if (fav.style.color=="gray"){
      fav.style.color="#4526F5"
    }
    else{
      fav.style.color="gray"
    }
}
