import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
type Prop={
    id:string;
}
const Cookie:FunctionalComponent<Prop>=({id})=>{
    const [send,setSend]= useState<boolean>(false);
    const PonerFavoritos=()=>{
        //solo creo la cookie y le asigno el primer personaje que pulso
        const date =new Date();
        const expires = date.getTime()+(365*24*60*60*1000);
        document.cookie = `IdPersonaje=${id};expires=${new Date(expires).toUTCString()};path=/`;
    }
    useEffect(()=>{
        PonerFavoritos();
        setSend(false);
    },[])
    return(
        <div>
            <button type="submit" onClick={()=>PonerFavoritos()}>★</button>
        </div>
    );

}
export default Cookie;
