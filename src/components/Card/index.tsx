import { useState } from "react";
import style from "./style.module.scss";

type feedbackType = "positive" | "negative";

interface Props {
    onTextChange: (text: string) => void;
    onTypeChange: (type: feedbackType | null) => void;
}

export default function Card({ onTextChange, onTypeChange}: Props) {
    const [markedCheckbox, setMarkedCheckbox] = useState<feedbackType| null>(null);

    function onCheckboxClick(whichOne: feedbackType) {
        setMarkedCheckbox(prev => {
            const newType = prev === whichOne ? null : whichOne;

            onTypeChange(newType);

            return newType;
        });
    }

    return (
        <div className={style.card}>
            <h3 className={style.card__title}>Tipo de feedback</h3>
            <section className={style.card__feedback_type}>
                <div className={style.card__feedback_type__checkbox_container}>
                    <input readOnly type="checkbox" id="positive" onClick={() => onCheckboxClick("positive")} checked={markedCheckbox === "positive"} className={style.card__feedback_type__checkbox_container__checkbox} />
                    <label htmlFor="positive" className={style.card__feedback_type__checkbox_container__description}>Positivo</label>
                </div>
                <div className={style.card__feedback_type__checkbox_container}>
                    <input readOnly type="checkbox" id="negative" onClick={() => onCheckboxClick("negative")} checked={markedCheckbox === "negative"} className={style.card__feedback_type__checkbox_container__checkbox} />
                    <label htmlFor="negative" className={style.card__feedback_type__checkbox_container__description}>Negativo</label>
                </div>
            </section>

            <h3 className={style.card__title}>Feedback</h3>
            <section className={style.card__feedback_input}>
                <textarea placeholder="Digite aqui seu feedback..."  onChange={(e) => onTextChange(e.target.value)} className={style.card__feedback_input__textarea}></textarea>
            </section>
        </div>
    );
}
