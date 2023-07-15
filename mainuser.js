var btn = document.getElementById('btn')
var loginbutton=document.getElementById("botoniniciarsesion")
var registerbutton=document.getElementById("botonregistrar")
var loginform=document.getElementById("inicioh")
var registerform=document.getElementById("registroh")
var submitbutton=document.getElementById("submitform")

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


function leftClick() {
    btn.style.left = '0';
    loginbutton.style.color="white";
    registerbutton.style.color="black";
    loginform.style.display="flex";
    registerform.style.display="none";
    submitbutton.innerHTML="Entrar"

  }

function rightClick() {
    btn.style.left = '47%';
    registerbutton.style.color="white";
    loginbutton.style.color="black";
    registerform.style.display="flex";
    loginform.style.display="none";
    submitbutton.innerHTML="Registrarse"

  }
