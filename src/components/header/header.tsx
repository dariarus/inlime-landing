import React, {FunctionComponent} from 'react';

import headerStyles from './header.module.css';
import logo from '../../images/logo.png';

import {SocialNetworks} from '../social-networks/social-networks';
import {NavButton} from '../nav-button/nav-button';
import {TCombinedNavRef} from '../../services/types';

type THeader = {
  refs: TCombinedNavRef;
  windowWidth: number;
}

export const Header: FunctionComponent<THeader> = (props) => {
  return (
    <header className={headerStyles.header} ref={props.refs.headerRef}>
      {
        props.windowWidth > 810
          ? <div className={headerStyles['header__info-wrap']}>
            <SocialNetworks/>
            <img src={logo} alt="Логотип" className={headerStyles.header__logo}/>
            <div className={headerStyles.header__info}>
              <p className={headerStyles.text}>+7 (964) 893-23-68
                <br/>г. Новороссийск, 15 мкр-н
                <br/>ул.Южная, 9</p>
            </div>
          </div>
          : <div className={headerStyles['header__info-wrap']}>
            <img src={logo} alt="Логотип" className={headerStyles.header__logo}/>
            <div className={headerStyles['header__info-content-wrap']}>
              <SocialNetworks/>
              <div className={headerStyles.header__info}>
                <p className={headerStyles.text}>+7 (964) 893-23-68
                  <br/>г. Новороссийск, 15 мкр-н
                  <br/>ул.Южная, 9</p>
              </div>
            </div>
          </div>
      }
      <div className={headerStyles.header__decor}/>
      <div className={headerStyles['header__navigation-wrap']}>
        <nav className={headerStyles.navigation}>
          <NavButton tabName="Услуги" ref={props.refs.servicesTypesRef}/>
          <NavButton tabName="О нас" ref={props.refs.aboutUsRef}/>
          <NavButton tabName="Прайс" ref={props.refs.priceRef}/>
          <NavButton tabName="Акции" ref={props.refs.promosRef}/>
        </nav>
      </div>
    </header>
  )
}