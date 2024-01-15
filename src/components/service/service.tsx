import React, {FunctionComponent} from 'react';

import serviceStyles from './service.module.css';

import {ServiceItem} from '../service-item/service-item';
import {Slider} from '../slider/slider';

type TService = {
  serviceHeading: string;
  servicesList: Array<{serviceName: string, servicePrice: string}>;
}

export const Service: FunctionComponent<TService> = (props) => {
  return (
    <div>
      <h3 className={serviceStyles.heading}>{props.serviceHeading}</h3>
      {
        props.servicesList.map(service => (
          <ServiceItem serviceName={service.serviceName} servicePrice={service.servicePrice}/>
        ))
      }
      <Slider/>
    </div>
  )
}