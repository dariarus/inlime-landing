import React, {FunctionComponent} from 'react';

import heroStyles from './hero.module.css';
import whatsAppIcon from '../../images/whatsApp-icon.png';
import openingHours from '../../images/opening-hours-icon.png';
import addressIcon from '../../images/address-icon.png';

import {ScaleText} from '../scale-text/scale-text';
import {PlaceInfo} from '../place-info/place-info';
import {Button} from '../button/button';

export const Hero: FunctionComponent = () => {
  return (
    <section className={heroStyles.hero}>
      <ScaleText/>
      <div className={heroStyles.info}>
        {/*<div className={heroStyles.info__description}>*/}
          <h1 className={`${heroStyles.text} ${heroStyles.text_header} ${heroStyles.text_main}`}><span
            className={`${heroStyles.text} ${heroStyles.text_uppercase}`}><span
            className={`${heroStyles.text} ${heroStyles.text_color_pink}`}>In</span><span
            className={`${heroStyles.text} ${heroStyles.text_color_green}`}>Lime</span></span>в Новороссийске
          </h1>
          <p className={`${heroStyles.text} ${heroStyles.text_paragraph}`}>Студия красоты, которая экономит Ваше время:
            маникюр, педикюр и наращивание ресничек
            как по отдельности, так и комплексом
            в 4 или 6 рук на удобном кресле-реклайнере</p>
          <Button type="small" color="lime"/>
        {/*</div>*/}
        {/*<div className={heroStyles.info__contacts}>*/}
          <PlaceInfo text="+7 (964) 893-23-68" background={whatsAppIcon} bgParams="0 top / 20%"/>
          <PlaceInfo text="Время работы: 9:00-21:00" background={openingHours} bgParams="0 50% / 15%"/>
          <PlaceInfo text="г. Новороссийск, 15 мкр-н, ул Южная, 9" background={addressIcon} bgParams="0 50% / 15%"/>
        {/*</div>*/}
      </div>
    </section>
  )
}