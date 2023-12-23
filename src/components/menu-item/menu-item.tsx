import React, {FunctionComponent} from 'react';

import menuItemStyles from './menu-item.module.css';

type TMenuItemProps = {
  url: string;
  service: string;
}

export const MenuItem: FunctionComponent<TMenuItemProps> = (props) => {
  return (
    <li className={menuItemStyles['menu-item']}>
      <img src={props.url} alt={props.service} className={menuItemStyles['menu-item__picture']}/>
      <p className={menuItemStyles['menu-item__heading']}>{props.service}</p>
    </li>
  )
}