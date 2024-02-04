import React, {FunctionComponent} from 'react';

import placeInfoStyles from './place-info.module.css';

type TPlaceInfoProps = {
  text: string | any; // any нужен, чтобы пропихнуть тег <br/>, когда нужен перенос строки в середине текста
  isMarginNeeded: boolean;
  background?: string;
  bgParams?: string;
}

export const PlaceInfo: FunctionComponent<TPlaceInfoProps> = (props) => {
  return (
    <div
      className={placeInfoStyles.content}
      style={{
        background: `url(${props.background ? props.background : ''}) ${props.bgParams ? props.bgParams : ''} no-repeat`,
        marginBottom: props.isMarginNeeded ? '1.5em' : '0',
        paddingLeft: props.background ? '100px' : '0'
      }}>
      <p className={placeInfoStyles.text}>{props.text}</p>
    </div>
  )
}