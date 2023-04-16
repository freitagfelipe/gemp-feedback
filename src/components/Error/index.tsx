import style from "./style.module.scss";

interface Props {
    reason: string;
}

export default function Error({ reason }: Props) {
    return (
        <div className={style.container}>
            <h1>Oops!</h1>

            <p>{reason}</p>
        </div>
    );
}
