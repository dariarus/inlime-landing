import React, {forwardRef} from 'react';

import menuItemStyles from './menu-item.module.css';
import {scrollToSection, useForwardRef} from '../../utils/functions';

type TMenuItemProps = {
  url: string;
  service: string;
  windowWidth: number;
}

export const MenuItem = forwardRef<HTMLDivElement, TMenuItemProps>((props, ref) => {
  const sectionRef = useForwardRef<HTMLDivElement>(ref);

  return (
    <button className={menuItemStyles['menu-item']}
            style={{
              background: props.windowWidth < 440
                ? `radial-gradient(rgba(186, 218, 85, 1) 20%, rgba(255, 255, 255, .5)), url(${props.url})`
                : '',
              backgroundSize: 'cover', // если это перенести в css, то не работает
              backgroundPosition: 'center'
            }}
            onClick={() => {
              scrollToSection(sectionRef.current);
            }}>
      {
        props.windowWidth > 440 &&
        <img src={props.url} alt={props.service} className={menuItemStyles['menu-item__picture']}/>
      }
      <p className={menuItemStyles['menu-item__heading']}>{props.service}</p>
    </button>
  )
})