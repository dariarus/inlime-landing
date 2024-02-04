import React, {forwardRef} from 'react';

import toTopButtonStyles from './to-top-button.module.css';

import {scrollToSection, useForwardRef} from '../../utils/functions';

// Пропсов нет, поэтому на их месте стоит [_]
export const ToTopButton = forwardRef<HTMLDivElement>((_, ref) => {
  const headerRef = useForwardRef<HTMLDivElement>(ref);

  return (
    <button className={toTopButtonStyles.button} onClick={() => {
      scrollToSection(headerRef.current);
    }}/>
  )
})
