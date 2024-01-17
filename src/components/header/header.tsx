import React, {FunctionComponent} from 'react';

import headerStyles from './header.module.css';
import logo from '../../images/logo.png';

import {SocialNetworks} from '../social-networks/social-networks';
import {NavButton} from '../nav-button/nav-button';
import {TCombinedNavRef} from '../../services/types';

export const Header: FunctionComponent<{refs: TCombinedNavRef}> = (props) => {
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
      <div className={headerStyles['navigation-wrap']}>
        <nav className={headerStyles.navigation}>
          <NavButton tabName="Виды услуг" ref={props.refs.servicesTypesRef}/>
          <NavButton tabName="О нас" ref={props.refs.aboutUsRef}/>
          <NavButton tabName="Прайс" ref={props.refs.priceRef}/>
          <NavButton tabName="Акции" ref={props.refs.promosRef}/>
        </nav>
      </div>
    </header>
  )
}