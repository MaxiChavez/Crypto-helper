let parteIzquierda = document.getElementById("aside-izquierdo")

parteIzquierda.classList.remove("aside-aqua");
parteIzquierda.classList.add("aside-negro");

function myFunction(){
      if (parteIzquierda.classList.contains("aside-aqua")){
            parteIzquierda.classList.remove("aside-aqua");
            parteIzquierda.classList.add("aside-negro");
      }
      else{
            parteIzquierda.classList.remove("aside-negro");
            parteIzquierda.classList.add("aside-aqua");
      }
}