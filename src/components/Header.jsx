import React from 'react';
import Header from './styles/Header.module.scss';

export default class HeaderMain extends React.Component{
    render () {
        return (
            <div className={Header.header__container}>
                <div>
                    <nav className={Header.header__menu}>
                        <ul className={Header.header__list}>
                            <li className={Header.header__item}>Words</li>
                            <li className={Header.header__item}>Learn Cards</li>
                            <li className={Header.header__item}>About</li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}