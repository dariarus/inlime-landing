import React, {FunctionComponent} from 'react';

import marqueeStyles from './scale-text.module.css';

export const ScaleText: FunctionComponent<{windowWidth: number}> = (props) => {
  return (
    <div className={marqueeStyles.container}>
      <div className={marqueeStyles['scale-text']}>
        <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день!
          {
            props.windowWidth < 530 &&
            <br/>
          } Дарим скидку 20%!</p>
      </div>
    </div>
  )
}