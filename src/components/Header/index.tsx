import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.header__nav}>
                <h1 className={style.header__nav__title}>GEMP</h1>

                <ul className={style.header__nav__container}>
                    <li className={style.header__nav__container__list}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${style.header__nav__container__list__link} ${
                                    isActive &&
                                    style.header__nav__container__list__link_active
                                }`
                            }
                        >
                            Início
                        </NavLink>
                    </li>

                    <li className={style.header__nav__container__list}>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `${style.header__nav__container__list__link} ${
                                    isActive &&
                                    style.header__nav__container__list__link_active
                                }`
                            }
                        >
                            Sobre
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
