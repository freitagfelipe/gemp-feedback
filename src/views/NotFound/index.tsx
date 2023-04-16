import Error from "../../components/Error";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export default function NotFound() {
    return (
        <div className={style.container}>
            <Error reason="Página não encontrada" />
            <Link to="/" className={style.link}>
                Home
            </Link>
        </div>
    );
}
