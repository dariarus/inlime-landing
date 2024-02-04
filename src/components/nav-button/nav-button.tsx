import React, {forwardRef} from 'react';

import navButtonStyles from './nav-button.module.css';

import {scrollToSection, useForwardRef} from '../../utils/functions';

export const NavButton = forwardRef<HTMLDivElement, { tabName: string }>((props, ref) => {
  const sectionRef = useForwardRef<HTMLDivElement>(ref);

  return (
    <button className={navButtonStyles['nav-item']} onClick={() => {
      scrollToSection(sectionRef.current);
    }}>
      {props.tabName}
    </button>
  )
})