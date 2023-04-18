import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.header__nav}>
                <h1 className={style.header__nav__title}>GEMP</h1>

                <div className={style.header__nav__container}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${style.header__nav__container__link} ${
                                isActive &&
                                style.header__nav__container__link_active
                            }`
                        }
                    >
                        Início
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${style.header__nav__container__link} ${
                                isActive &&
                                style.header__nav__container__link_active
                            }`
                        }
                    >
                        Sobre
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
