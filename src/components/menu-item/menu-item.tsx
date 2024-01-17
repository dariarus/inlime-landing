import React, {forwardRef} from 'react';

import menuItemStyles from './menu-item.module.css';
import {scrollToSection, useForwardRef} from '../../utils/functions';

type TMenuItemProps = {
  url: string;
  service: string;
}

export const MenuItem = forwardRef<HTMLDivElement, TMenuItemProps>((props, ref) => {
  const sectionRef = useForwardRef<HTMLDivElement>(ref);

  return (
    <button className={menuItemStyles['menu-item']} onClick={() => {
      scrollToSection(sectionRef.current);
    }}>
      <img src={props.url} alt={props.service} className={menuItemStyles['menu-item__picture']}/>
      <p className={menuItemStyles['menu-item__heading']}>{props.service}</p>
    </button>
  )
})