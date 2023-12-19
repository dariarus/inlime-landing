import React, {FunctionComponent} from 'react';

import headerStyles from './header.module.css';
import logo from '../../images/logo.png';

import {SocialNetworks} from '../social-networks/social-networks';

export const Header: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
      <SocialNetworks/>
      <img src={logo} alt="Логотип" className={headerStyles.header__logo}/>
      <div className={headerStyles.header__info}>
        <p className={headerStyles.text}>+7 (964) 893-23-68</p>
        <p className={headerStyles.text}>г. Новороссийск, 15 мкр-н</p>
        <p className={headerStyles.text}>ул.Южная, 9</p>
      </div>
      <span className={headerStyles.header__decor}></span>
      <nav>
        <ul>
          <li>О нас</li>
          <li>Прайс</li>
          <li>Акции</li>
        </ul>
      </nav>
    </header>
  )
}