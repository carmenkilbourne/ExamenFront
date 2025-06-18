import { FunctionalComponent } from "preact/src/index.d.ts";
type Prop={
    id:string;
}
const Cookie:FunctionalComponent<Prop>=({id})=>{
    const PonerFavoritos=()=>{
        const date =new Date();
        const expires = date.getTime()+(365*24*60*60*1000);
        document.cookie = `IdPersonaje=${id};expires=${new Date(expires).toUTCString()};path=/`;
    }
    return(
        <div>
            <button type="submit" onClick={()=>PonerFavoritos()}>Favorito</button>
            <p>{id}</p>
        </div>
    );

}
export default Cookie;
