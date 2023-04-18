import Header from "../../components/Header";
import style from "./style.module.scss";

export default function About() {
    return (
        <>
            <Header />
            <div className={style.main_content_container}>
                <h2 className={style.main_content_container__title}>Sobre</h2>

                <p className={style.main_content_container__text}>
                    Qualquer envio de formulário realizado por meio deste site
                    servirá como um meio para vocês me darem um feedback sobre o
                    que vocês gostaram ou não gostaram das aulas que já tivemos.
                    O envio será anônimo e apenas servirá para me ajudar a
                    melhorar. Lembrando que o uso desse site é exclusivo para as
                    minhas turmas.
                </p>
            </div>
        </>
    );
}
