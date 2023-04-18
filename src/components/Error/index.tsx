import style from "./style.module.scss";

interface Props {
    reason: string;
}

export default function Error({ reason }: Props) {
    return (
        <div className={style.error_container}>
            <h1 className={style.error_container__title}>Oops!</h1>

            <p className={style.error_container__reason}>{reason}</p>
        </div>
    );
}
