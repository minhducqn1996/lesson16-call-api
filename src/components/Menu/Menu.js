import React from 'react';
import { Link, Route } from 'react-router-dom';

const Menu = () => {
    const menus = [
        {
            name: 'Trang chủ',
            to: '/',
            exact: true
        },
        {
            name: 'Quản lý sản phẩm',
            to: '/product-list',
            exact: false
        }
    ]

    const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    var active = match ? 'active' : '';
                    return (
                        <li className={active}>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    )
                }}
            />
        )
    }

    const showMenu = (menus) => {
        let result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        to={menu.to}
                        label={menu.name}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }

    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand" href="/#">Call API</a>
            <ul className="nav navbar-nav">
                {showMenu(menus)}
            </ul>
        </div>
    );
};

export default Menu;