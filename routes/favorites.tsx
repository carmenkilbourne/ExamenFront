import axios from 'axios';
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../types.ts";
import { getCookies } from "$std/http/cookie.ts";

type Prop ={
    characters:Character[];
}
export const handler: Handlers = {
  async GET(req:Request, ctx:FreshContext) {
    const cookies = getCookies(req.headers);
    const id =cookies.IdPersonaje;
    const personajes = await axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`);
        return ctx.render({characters:personajes.data});
  },
};

export default function Home(props:PageProps<Prop>) {
const characters = props.data.characters;
  return (
    <div class="CharactersContainer">
      {characters.map((p) =>(
        <li key={p.id} style="none">
          <a href={`/characters/${p.id}`}>
          <img src={p.image}/>
          <p>{p.name}</p> 
          </a>          
        </li>
      ))}

    </div>
  );
}