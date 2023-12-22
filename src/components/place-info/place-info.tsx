import React, {FunctionComponent} from 'react';

import placeInfoStyles from './place-info.module.css';

type TPlaceInfoProps = {
  text: string;
  background: string;
  bgParams: string;
}

export const PlaceInfo: FunctionComponent<TPlaceInfoProps> = (props) => {
  return (
    <div
      className={placeInfoStyles.content}
      style={{background: `url(${props.background}) ${props.bgParams} no-repeat`}}>
      <p className={placeInfoStyles.text}>{props.text}</p>
    </div>
  )
}