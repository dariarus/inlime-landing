import React, {FunctionComponent} from 'react';

import serviceStyles from './service.module.css';

import {ServiceItem} from '../service-item/service-item';
import {Slider} from '../slider/slider';
import {Button} from '../button/button';

type TService = {
  serviceHeading: string;
  servicesList: Array<{ serviceName: string, servicePrice: string }>;
  portfolio: string[];
}

export const Service: FunctionComponent<TService> = (props) => {
  return (
    <div className={serviceStyles['service-content']}>
      <h3 className={serviceStyles['service-content__heading']}>{props.serviceHeading}</h3>
      {
        props.servicesList.map((service, index) => (
          <ServiceItem key={index} serviceName={service.serviceName} servicePrice={service.servicePrice}/>
        ))
      }
      <div className={serviceStyles['service-content__button-wrap']}>
        <Button type="small" color="pink"/>
      </div>
      <Slider picturesArray={props.portfolio}/>
    </div>
  )
}