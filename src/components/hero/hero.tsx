import React, {FunctionComponent} from 'react';

import heroStyles from './hero.module.css';
import whatsAppIcon from '../../images/whatsApp-icon.png';
import openingHoursIcon from '../../images/opening-hours-icon.png';
import addressIcon from '../../images/address-icon.png';

import {PlaceInfo} from '../place-info/place-info';
import {Button} from '../button/button';

export const Hero: FunctionComponent<{ windowWidth: number }> = (props) => {
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.info}>
        <h1 className={`${heroStyles.text} ${heroStyles.text_header} ${heroStyles.text_main}`}><span
          className={`${heroStyles.text} ${heroStyles.text_uppercase}`}><span
          className={`${heroStyles.text} ${heroStyles.text_color_pink}`}>In</span><span
          className={`${heroStyles.text} ${heroStyles.text_color_green}`}>Lime</span></span>
          {
            props.windowWidth < 475 &&
            <br/>
          }
          в Новороссийске
        </h1>
        <p className={`${heroStyles.text} ${heroStyles.text_paragraph}`}>Студия красоты, которая экономит Ваше время:
          маникюр, педикюр, коррекция бровей и наращивание ресничек
          как по отдельности, так и комплексом
          в 4 или 6 рук на удобном кресле-реклайнере</p>
        {
          props.windowWidth > 712
            ? <>
              <Button color="lime"/>
              <PlaceInfo text="+7 (964) 893-23-68" background={whatsAppIcon}
                         bgParams={props.windowWidth > 820 ? "0 top / 20%" : "15% 50% / 20%"} isMarginNeeded={false}/>
              <PlaceInfo text="Время работы: 9:00-21:00" background={openingHoursIcon}
                         bgParams={props.windowWidth > 820 ? "0 50% / 15%" : "15% 50% / 15%"} isMarginNeeded={false}/>
              <PlaceInfo text="г. Новороссийск, 15 мкр-н, ул Южная, 9" background={addressIcon}
                         bgParams={props.windowWidth > 820 ? "0 50% / 15%" : "15% 50% / 15%"} isMarginNeeded={false}/>
            </>
            : <>
              <PlaceInfo text="+7 (964) 893-23-68" isMarginNeeded={false}/>
              <PlaceInfo text={["Время работы:", <br/>, "9:00-21:00"]}
                         isMarginNeeded={false}/>
              <PlaceInfo text={["г. Новороссийск,", <br/>, "15 мкр-н, ул Южная, 9"]} isMarginNeeded={true}/>
              <Button color="lime"/>
            </>
        }
      </div>
    </section>
  )
}