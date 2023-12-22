import React, {FunctionComponent} from 'react';

import headerStyles from './header.module.css';
import logo from '../../images/logo.png';

import {SocialNetworks} from '../social-networks/social-networks';

export const Header: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.header__wrap}>
        <SocialNetworks/>
        <img src={logo} alt="Логотип" className={headerStyles.header__logo}/>
        <div className={headerStyles.header__info}>
          <p className={headerStyles.text}>+7 (964) 893-23-68</p>
          <p className={headerStyles.text}>г. Новороссийск, 15 мкр-н</p>
          <p className={headerStyles.text}>ул.Южная, 9</p>
        </div>
      </div>
      <div className={headerStyles.header__decor}/>
      <nav className={headerStyles.navigation}>
        <ul className={headerStyles.navigation__list}>
          <li className={headerStyles['navigation__list-item']}>
            <a href={'#'} className={`${headerStyles.text} ${headerStyles.text_link}`}>О нас</a>
          </li>
          <li className={headerStyles['navigation__list-item']}>
            <a href={'#'} className={`${headerStyles.text} ${headerStyles.text_link}`}>Прайс</a>
          </li>
          <li className={headerStyles['navigation__list-item']}>
            <a href={'#'} className={`${headerStyles.text} ${headerStyles.text_link}`}>Акции</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}