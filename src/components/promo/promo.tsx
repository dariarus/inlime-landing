import React, {FunctionComponent} from 'react';

import promoStyles from './promo.module.css';

type TPromo = {
  promoImage: string;
  heading: string;
  description: string;
}

export const Promo: FunctionComponent<TPromo> = (props) => {
  return (
    <div className={promoStyles.card}>
      <div className={promoStyles['card__header-wrap']}>
        <img src={props.promoImage} alt="Обложка акции" className={promoStyles.card__image}/>
        <p className={`${promoStyles.text} ${promoStyles['text_card-heading']}`}>{props.heading}</p>
      </div>
      <p className={`${promoStyles.text} ${promoStyles['text_card-subheading']}`}>{props.description}</p>
    </div>
  )
}