import axios from 'axios';

import { Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../types.ts";
import Cookie from "../islands/Cookie.tsx";

type Prop ={
  characters:Character[];
}
export const handler: Handlers = {
  async GET(_req, ctx) {
    const personajes = await axios.get<Character[]>(`https://hp-api.onrender.com/api/characters`);
    /*
    const headers=new Header();
    const date =new Date();
    const expires = date.getTime()+(365*24*60*60*1000);
    header.append ="Set-Cookie", `IdHP=${id};expires=${new Date(expires).toUTCString()};path=/`;*/ 
    return ctx.render({characters:personajes.data});
  },
};

export default function Home(props:PageProps<Prop>) {
  const characters = props.data.characters;
  return (
    <div class="CharactersContainer">
      {characters.map((p) =>(
        <li key={p.id} class="nada" >
          <a href={`/characters/${p.id}`}>
          <img src={p.image}/>
          <p>{p.name}</p> 
          </a>
          <Cookie id={characters[0].id}/>
        </li>
      ))}

    </div>
  );
}