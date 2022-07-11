import { Navbar } from "../components/navbar.js"
import { Boton } from "../components/navbar.js"

export const IndexRenderizador = () => { 
      //Aca voy a meter los componentes
      //1.Capturo la ubicacion donde quiero meter el componente
      let rootNavbar=document.getElementById('navbar-root') 
      //2.Le agrego el componente que quiero meter
      rootNavbar.innerHTML+=Navbar

      rootNavbar.innerHTML+=Boton
}