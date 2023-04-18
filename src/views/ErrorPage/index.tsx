import RedirectButton from "../../components/RedirectButton";
import style from "./style.module.scss";

export default function ErrorPage() {
    return (
        <div className={style.main_content_container}>
            <h1 className={style.main_content_container__title}>Algo de errado aconteceu</h1>

            <p className={style.main_content_container__text}>O envio do seu feedback não ocorreu muito bem, clique no botão abaixo para voltar para a tela inicial e tente novamente.</p>

            <RedirectButton to="/">Início</RedirectButton>
        </div>
    );
}