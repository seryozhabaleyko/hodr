import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../Logo';

import './Navbar.scss';
import UserAccount from '../UserAccount/UserAccount';

const menuList = [
    { label: 'Главная', to: '/', exact: true },
    { label: 'Игры', to: '/games', exact: false },
    { label: 'Новости', to: '/news', exact: false },
    { label: 'Статьи', to: '/articles', exact: false },
    { label: 'Рецензии', to: '/reviews', exact: false },
];

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar__left">
                        <Logo />
                        <nav className="nav-menu">
                            <ul className="nav-menu__list">
                                {menuList.map(({ label, to, exact }) => (
                                    <li className="nav-menu__item" key={label}>
                                        <NavLink className="nav-menu__link" to={to} exact={exact}>
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="navbar__right">
                        <nav>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Register</Link>
                        </nav>
                        <UserAccount />
                    </div>
                </div>
            </div>
            <div className="navbar__skeleton"></div>
        </>
    );
}

export default memo(Navbar);
