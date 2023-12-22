import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';
import manicure from '../../images/1.jpg';
import pedicure from '../../images/2.jpg';
import brows from '../../images/5.jpg';
import eyelashes from '../../images/1N_xwlUyOII.jpg';

import {Header} from '../header/header';
import {Hero} from '../hero/hero';
import {MenuItem} from '../menu-item/menu-item';

const App: FunctionComponent = () => {
  return (
    <div className={appStyles.content}>
      <Header/>
      <main>
        <Hero/>
        <div className={appStyles.decor}/>
        <menu className={appStyles.menu}>
          <MenuItem service="Маникюр" url={manicure}/>
          <MenuItem service="Педикюр" url={pedicure}/>
          <MenuItem service="Брови" url={brows}/>
          <MenuItem service="Реснички" url={eyelashes}/>
        </menu>
      </main>
    </div>
  )
}

export default App;