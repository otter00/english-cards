import React from 'react';
import Header from './styles/Header.module.scss';
import logo from './../assets/logo.png';

export default class HeaderMain extends React.Component{
    render () {
        return (
            <div className={Header.header__container}>
                <div>
                    <nav className={Header.header__menu}>
                        <ul className={Header.header__list}>
                            <li className={Header.header__item}>Home Page</li>
                            <li className={Header.header__item}>Learn Words</li>
                            <img src={logo} alt='logo'></img>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}