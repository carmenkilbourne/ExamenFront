import axios from 'axios';
import { Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../types.ts";

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

export default function Home(props:PageProps<Prop>) {
  const characters = props.data.characters;
  return (
    <div>
      {
    <div>
      <h1>{characters[0].name}</h1>
      <p>Casa: {characters[0].house}</p> 
    </div>
      }
    </div>
  );
}