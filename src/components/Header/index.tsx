import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <h1>GEMP</h1>

                <div className={style.container}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${style.link} ${isActive && style.active}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${style.link} ${isActive && style.active}`
                        }
                    >
                        Sobre
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
