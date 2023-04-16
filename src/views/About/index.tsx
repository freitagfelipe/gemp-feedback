import Header from "../../components/Header";
import style from "./style.module.scss";

export default function About() {
    return (
        <>
            <Header />
            <div className={style.container}>
                <h2>Sobre</h2>

                <p>
                    Qualquer envio de formulário realizado por meio deste site
                    servirá como um meio para vocês me darem um feedback
                    contínuo sobre o que vocês gostaram ou não gostaram das
                    aulas que já tivemos ou das aulas que teremos. O envio será
                    anônimo e apenas servirá para me ajudar a melhorar.
                </p>
            </div>
        </>
    );
}
