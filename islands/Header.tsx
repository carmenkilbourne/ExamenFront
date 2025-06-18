import { FunctionalComponent } from "preact/src/index.d.ts";

const Header:FunctionalComponent=()=>{
    return(
        <div class="Header">
            <a href="/">Todos</a>
            <a href="/favorites">Favoritos</a>
        </div>

    );

}
export default Header;
