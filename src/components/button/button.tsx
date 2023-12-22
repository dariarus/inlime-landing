import React, {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

type TButton = {
  type: 'large' | 'small';
}

export const Button: FunctionComponent<TButton> = (props) => {
  return (
    <button
      className={props.type === 'large'
        ? `${buttonStyles.button} ${buttonStyles.button_large}`
        : `${buttonStyles.button} ${buttonStyles.button_small}`}
      onClick={() => {
        window.open('https://dikidi.online/484867');
      }}>
      Записаться!
    </button>
  )
}