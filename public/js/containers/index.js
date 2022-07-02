import { Select } from "../components/select.js"
import { getPokemon } from "../services/pokemonservices.js";
import { ImagenPokemon } from "../components/imgPokemon.js";

const RenderSelect=()=>{ //Aca digo que hay que renderizar y donde
      let _root=document.getElementById("root"); //a esto
      _root.innerHTML+=Select() //agregale esto
}

const RenderTexto=()=>{
      let _root_text=document.getElementById("root-text");
      _root_text.innerHTML += 'content';
}

const RenderPokemon = (json) =>{
      let _rootPokemon=document.getElementById("root-pokemon")
      _rootPokemon.innerHTML+=ImagenPokemon(json.sprites.back_default)
}

export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      RenderSelect()
      RenderTexto()
      getPokemon(RenderPokemon)
}