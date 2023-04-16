import Error from "../../components/Error";
import RedirectButton from "../../components/RedirectButton";
import style from "./style.module.scss";

export default function NotFound() {
    return (
        <div className={style.container}>
            <Error reason="Página não encontrada!" />

            <p>Clique no botão abaixo para ir a tela inicial.</p>

            <RedirectButton to="/" className={style.link}>Home</RedirectButton>
        </div>
    );
}
