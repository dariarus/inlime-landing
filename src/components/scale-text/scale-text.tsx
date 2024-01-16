import React, {FunctionComponent} from 'react';

import marqueeStyles from './scale-text.module.css';

export const ScaleText: FunctionComponent = () => {
  return (
    <div className={marqueeStyles.container}>
      <div className={marqueeStyles['running-text']}>
        <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>
      </div>
    </div>
  )
}