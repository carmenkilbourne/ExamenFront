import axios from 'axios';
import { Handlers, PageProps } from "$fresh/server.ts";
import { Character } from "../types.ts";
import { setCookie } from "$std/http/cookie.ts";

type Prop ={
  characters:Character[];
}
export const handler: Handlers = {
  async GET(_req, ctx) {
    const {id} = ctx.params;
    const date =new Date();
    const e = date.getTime()+(365*24*60*60*1000);
    const expires =new Date(e).toUTCString();
    const headers =new Headers();
    setCookie(headers,{
        name:"idP",
        value:id,
        path:"/",
        expires:Date.now()+(365*24*60*60*1000)
    });
    const personajes = await axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`)
    return ctx.render({characters:personajes.data});
  },
};

export default function BotonFavoritos(props:PageProps<Prop>) {
  const characters = props.data.characters;
  return (
    <div>
    <button type="submit">Favorito</button>
    </div>
  );
}