import Error from "../../components/Error";
import RedirectButton from "../../components/RedirectButton";
import style from "./style.module.scss";

export default function NotFound() {
    return (
        <div className={style.main_content_container}>
            <Error reason="Página não encontrada!" />

            <p className={style.main_content_container__text}>Clique no botão abaixo para ir para a tela inicial.</p>

            <RedirectButton to="/" className={style.main_content_container__link}>Início</RedirectButton>
        </div>
    );
}
