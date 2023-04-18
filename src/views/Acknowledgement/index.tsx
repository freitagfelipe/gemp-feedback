import RedirectButton from "../../components/RedirectButton";
import style from "./style.module.scss";

export default function Acknowledgement() {
    return (
        <div className={style.main_content_container}>
            <h2 className={style.main_content_container__title}>Obrigado pelo feedback</h2>

            <p className={style.main_content_container__text}>
                Tentarei ler o seu feedback o mais rápido possível e usá-lo para pensar nos pontos fortes e fracos das nossas aulas. Para voltar a tela inicial basta clicar no botão abaixo.
            </p>

            <RedirectButton to="/">Início</RedirectButton>
        </div>
    );
}