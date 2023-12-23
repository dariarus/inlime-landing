import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';
import manicure from '../../images/1.jpg';
import pedicure from '../../images/2.jpg';
import brows from '../../images/5.jpg';
import eyelashes from '../../images/1N_xwlUyOII.jpg';
import interior1 from '../../images/interior/interiоr-1.jpg';
import interior2 from '../../images/interior/interiоr-2.jpg';
import interior3 from '../../images/interior/interiоr-3.jpg';

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
          <ul className={appStyles.menu__list}>
            <MenuItem service="Маникюр" url={manicure}/>
            <MenuItem service="Педикюр" url={pedicure}/>
            <MenuItem service="Брови" url={brows}/>
            <MenuItem service="Реснички" url={eyelashes}/>
          </ul>
        </menu>
        <section className={appStyles.section}>
          <h2 className={appStyles.section__heading}>О нас</h2>
          <div className={appStyles['about-us']}>
            <p className={appStyles.text}>
              <span className={appStyles.text_color_pink}>In</span><span
              className={appStyles.text_color_lime}>Lime</span> - студия красоты, специализирующаяся на одновременном
              оказании услуг маникюра, педикюра и наращивании ресничек.
              Клиенты, которые ценят своё время, выбирают нас,
              чтобы за 2.5 часа сделать сразу 2 или 3 услуги.
            </p>
            <p className={appStyles.text}>Мы дорожим своими клиентами, поэтому
              наши мастера работают исключительно на качественных материалах, а инструменты перед процедурой проходят
              все необходимые
              этапы стерилизации.</p>
            <p className={appStyles.text}>Записывайтесь к нам по телефону, через WhatsApp,
              Instagram, или на сайте DIKIDI!</p>
          </div>
          <div className={appStyles['about-us__interior-photos']}>
            <img src={interior1} alt="Фото интерьера" className={appStyles['about-us__interior-photo']}/>
            <img src={interior2} alt="Фото интерьера" className={appStyles['about-us__interior-photo']}/>
            <img src={interior3} alt="Фото интерьера" className={appStyles['about-us__interior-photo']}/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;