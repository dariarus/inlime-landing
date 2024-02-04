import React, {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

type TButton = {
  color: 'lime' | 'pink';
}

export const Button: FunctionComponent<TButton> = (props) => {
  return (
    <button
      className={props.color === 'lime'
          ? `${buttonStyles.button} ${buttonStyles.button_color_lime}`
          : `${buttonStyles.button} ${buttonStyles.button_color_pink}`
      }
      onClick={() => {
        window.open('https://dikidi.online/484867');
      }}>
      Записаться!
    </button>
  )
}