import React, {FunctionComponent} from 'react';

import marqueeStyles from './marquee.module.css';

export const Marquee: FunctionComponent = () => {
  return (
    <div className={marqueeStyles.container}>
      <div className={marqueeStyles['running-text']}>
        <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>
        <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>
        <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>
        {/*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
        {/*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
        {/*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
        {/*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
      </div>
      {/*<div className={marqueeStyles['running-text']}>*/}
      {/*  <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
      {/*  <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
      {/*  <p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*/}
      {/*  /!*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*!/*/}
      {/*  /!*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*!/*/}
      {/*  /!*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*!/*/}
      {/*  /!*<p className={marqueeStyles.text}>20 числа каждого месяца - клиентский день! Дарим скидку 20%!</p>*!/*/}
      {/*</div>*/}
    </div>
  )
}