import Header from "../../components/Header";
import RedirectButton from "../../components/RedirectButton";
import style from "./style.module.scss";

export default function Acknowledgement() {
    return (
        <div className={style.container}>
            <h2>Obrigado pelo feedback</h2>

            <p>
                Tentarei ler o mais rápido possível e usá-lo para pensar nos pontos fortes e fracos das nossas aulas. Para voltar a tela inicial basta clicar no botão abaixo.
            </p>

            <RedirectButton to="/">Home</RedirectButton>
        </div>
    );
}