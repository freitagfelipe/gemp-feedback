import { useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SubmitButton from "../../components/SubmitButton";

type feedbackType = "positive" | "negative";

export default function Home() {
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);
    const [text, setText] = useState<string>("");
    const navigate = useNavigate();

    function onFeedbackTypeChange(type: feedbackType | null) {
        setFeedbackType(type);
    }

    function onTextChange(newText: string) {
        setText(newText);
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            const result = await axios.get(
                `${import.meta.env
                    .VITE_API_URL!}/send?type=${feedbackType}&text=${text}`
            );

            if (result.status === 200) {
                navigate("/acknowledgement");

                return;
            }

            throw new Error("Fetch returned status !== 200");
        } catch (_) {
            navigate("/error");
        }
    }

    return (
        <>
            <Header />

            <div className={style.main_content_container}>
                <h2 className={style.main_content_container__title}>
                    Feedback
                </h2>

                <form
                    onSubmit={(e) => onSubmit(e)}
                    className={style.main_content_container__form}
                >
                    <Card
                        onTypeChange={onFeedbackTypeChange}
                        onTextChange={onTextChange}
                    />

                    <SubmitButton
                        disabled={text === "" || feedbackType === null}
                    >
                        Enviar
                    </SubmitButton>
                </form>
            </div>
        </>
    );
}
