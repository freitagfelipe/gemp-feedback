import style from "./style.module.scss";

interface Props {
    children: string;
    disabled?: boolean;
}

export default function SubmitButton({ children, disabled }: Props) {
    return (
        <input disabled={disabled} type="submit" value={children} className={style.submit_button} />
    );
}