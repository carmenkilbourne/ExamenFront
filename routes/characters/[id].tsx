import axios from 'axios';
import { Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../../types.ts";
import Cookie from "../../islands/Cookie.tsx";
type Prop ={
  characters:Character[];
}
export const handler: Handlers = {
  async GET(_req, ctx) {
    const {id} = ctx.params;
    const personajes = await axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`)
    return ctx.render({characters:personajes.data});
  },
};

export default function Page(props:PageProps<Prop>) {
  const characters = props.data.characters;
  return (
    <div class="CharacterContainer">
      {
    <div class="CharacterCard">
      <img src={characters[0].image}/>
      <h1>{characters[0].name}</h1>
      <p>Casa: {characters[0].house}</p> 
      {characters[0].alive && <p>Vivo</p> || <p>Muerto</p> }
      <a href="/">Volver</a>
    </div>
      }
   
    </div>
  );
}