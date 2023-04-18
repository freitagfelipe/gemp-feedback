import { Link } from "react-router-dom";
import style from "./style.module.scss";

interface Props {
    to: string;
    children: string;
    className?: string;
}

export default function RedirectButton({ to, children, className}: Props) {
    return (
        <Link to={to} className={`${style.redirect_button} ${className}`}>
            { children }
        </Link>
    );
}